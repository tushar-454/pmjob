import { getDB } from "@/db";
import * as schema from "@/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

const getAuthDB = async () => await getDB();

export const auth = betterAuth({
    database: drizzleAdapter(getAuthDB, {
        provider: "pg",
        schema: {
            ...schema,
            user: schema.users,
        },
        usePlural: true,
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [nextCookies()],
});
