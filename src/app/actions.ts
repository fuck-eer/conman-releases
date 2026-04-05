"use server";

import { db } from "@/db";
import { betaUsers, config } from "@/db/schema";
import { eq, sql, and, lte } from "drizzle-orm";
import { fetchLatestRelease, type PlatformDownloads } from "@/lib/github";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RegisterResult =
	| { status: "active"; downloads: PlatformDownloads }
	| { status: "waitlisted"; position: number }
	| { status: "error"; error: string };

export async function registerBetaUser(
	email: string,
): Promise<RegisterResult> {
	const cleaned = email.trim().toLowerCase();

	if (!cleaned || !EMAIL_RE.test(cleaned)) {
		return { status: "error", error: "Invalid email format" };
	}

	try {
		const existing = await db
			.select()
			.from(betaUsers)
			.where(eq(betaUsers.email, cleaned))
			.limit(1);

		if (existing.length > 0) {
			const user = existing[0];

			if (user.status === "active") {
				const downloads = await fetchLatestRelease();
				return { status: "active", downloads };
			}

			const [positionResult] = await db
				.select({ count: sql<number>`count(*)` })
				.from(betaUsers)
				.where(
					and(
						eq(betaUsers.status, "waitlisted"),
						lte(betaUsers.createdAt, user.createdAt),
					),
				);

			return {
				status: "waitlisted",
				position: Number(positionResult.count),
			};
		}

		const [activeCountResult] = await db
			.select({ count: sql<number>`count(*)` })
			.from(betaUsers)
			.where(eq(betaUsers.status, "active"));

		const [maxSlotsResult] = await db
			.select()
			.from(config)
			.where(eq(config.key, "max_beta_slots"))
			.limit(1);

		const activeCount = Number(activeCountResult.count);
		const maxSlots = maxSlotsResult
			? parseInt(maxSlotsResult.value, 10)
			: 50;

		if (activeCount < maxSlots) {
			await db
				.insert(betaUsers)
				.values({ email: cleaned, status: "active" });
			const downloads = await fetchLatestRelease();
			return { status: "active", downloads };
		}

		await db
			.insert(betaUsers)
			.values({ email: cleaned, status: "waitlisted" });

		const [positionResult] = await db
			.select({ count: sql<number>`count(*)` })
			.from(betaUsers)
			.where(eq(betaUsers.status, "waitlisted"));

		return {
			status: "waitlisted",
			position: Number(positionResult.count),
		};
	} catch (err) {
		console.error("Register error:", err);
		const detail =
			process.env.NODE_ENV === "development" && err instanceof Error
				? `: ${err.message}`
				: "";
		return {
			status: "error",
			error: `Something went wrong${detail}. Please try again.`,
		};
	}
}
