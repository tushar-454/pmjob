import {
    boolean,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const reports = pgTable("reports", {
    id: serial("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 255 }).notNull(),
    matchPercentage: integer("match_percentage"),
    missingKeywords: text("missing_keywords").array(),
    matchedKeywords: text("matched_keywords").array(),
    experienceRecommendations: text("experience_recommendations"),
    formattingRecommendations: text("formatting_recommendations"),
    jobLink: text("job_link"),
    jobDescription: text("job_description"),
    pdfLink: text("pdf_link"),
    pdfContent: text("pdf_content"),
    createdAt: timestamp("created_at").defaultNow(),
});
