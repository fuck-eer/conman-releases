import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export interface Testimonial {
	id: string;
	handle: string;
	text: string;
	avatarUrl: string | null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
	try {
		const rows = await db
			.select({
				id: testimonials.id,
				handle: testimonials.handle,
				text: testimonials.text,
				avatarUrl: testimonials.avatarUrl,
			})
			.from(testimonials)
			.where(eq(testimonials.visible, true))
			.orderBy(desc(testimonials.createdAt));

		return rows;
	} catch (err) {
		console.error("Failed to fetch testimonials:", err);
		return [];
	}
}
