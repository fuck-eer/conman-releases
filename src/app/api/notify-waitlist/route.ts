import { db } from "@/db";
import { betaUsers, config } from "@/db/schema";
import { eq, sql, asc } from "drizzle-orm";

export async function POST(request: Request) {
	const authHeader = request.headers.get("authorization");
	const expectedToken = process.env.ADMIN_SECRET;

	if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
		return Response.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
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
		const maxSlots = maxSlotsResult ? parseInt(maxSlotsResult.value, 10) : 50;
		const available = maxSlots - activeCount;

		if (available <= 0) {
			return Response.json({ promoted: 0, message: "No slots available" });
		}

		const waitlistedUsers = await db
			.select()
			.from(betaUsers)
			.where(eq(betaUsers.status, "waitlisted"))
			.orderBy(asc(betaUsers.createdAt))
			.limit(available);

		for (const user of waitlistedUsers) {
			await db
				.update(betaUsers)
				.set({ status: "active", notifiedAt: new Date() })
				.where(eq(betaUsers.id, user.id));

			// TODO: Replace with Resend email when API key is available
			console.log(`[notify-waitlist] Promoted ${user.email} — email stub`);
		}

		return Response.json({
			promoted: waitlistedUsers.length,
			message: `Promoted ${waitlistedUsers.length} users`,
		});
	} catch (err) {
		console.error("Notify-waitlist error:", err);
		return Response.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
