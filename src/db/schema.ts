import { pgTable, text, timestamp, uuid, index } from "drizzle-orm/pg-core";

export const betaUsers = pgTable(
	"beta_users",
	{
		id: uuid("id").defaultRandom().primaryKey(),
		email: text("email").unique().notNull(),
		status: text("status", { enum: ["active", "waitlisted"] })
			.notNull()
			.default("waitlisted"),
		createdAt: timestamp("created_at", { withTimezone: true })
			.defaultNow()
			.notNull(),
		notifiedAt: timestamp("notified_at", { withTimezone: true }),
	},
	(table) => [
		index("idx_beta_users_status").on(table.status),
		index("idx_beta_users_created_at").on(table.createdAt),
	],
);

export const config = pgTable("config", {
	key: text("key").primaryKey(),
	value: text("value").notNull(),
});
