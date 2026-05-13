import { getDB } from "@/db";
import * as authSchema from "@/db/auth-schema";
import * as schema from "@/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

const authDb = await getDB();

export const auth = betterAuth({
    database: drizzleAdapter(authDb, {
        provider: "pg",
        schema: {
            ...authSchema,
            ...schema,
        },
        usePlural: true,
    }),

    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60,
            strategy: "compact",
        },
    },
    emailAndPassword: {
        enabled: true,
    },

    plugins: [nextCookies()],
});
