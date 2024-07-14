import {pgTable, PgTransaction, text, timestamp} from "drizzle-orm/pg-core"
import {ExtractTablesWithRelations} from "drizzle-orm";
import {PostgresJsQueryResultHKT} from "drizzle-orm/postgres-js";

export type DrizzleTransaction = PgTransaction<PostgresJsQueryResultHKT, typeof import("@/lib/database/schema"), ExtractTablesWithRelations<typeof import("@/lib/database/schema")>>;

export const accounts = pgTable("account", {
    id: text("id").notNull().primaryKey(),

    profilePicture: text("profilePicture"),

    createdAt: timestamp("created_at", {mode: "date"}).defaultNow().notNull(),
});
