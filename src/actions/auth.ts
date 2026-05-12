"use server";
import { auth } from "@/lib/auth";

export const signIn = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        typeof name !== "string"
    ) {
        throw new Error("Email, password, and name are required");
    }

    try {
        const result = await auth.api.signInEmail({
            body: {
                email,
                password,
            },
        });
        return result;
    } catch (error) {
        console.error("Error during sign-in:", error);
        throw new Error("Failed to sign in");
    }
};

export const signUp = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        typeof name !== "string"
    ) {
        throw new Error("Email, password, and name are required");
    }

    try {
        const result = await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        });
        return result;
    } catch (error) {
        console.error("Error during registration:", error);
        throw new Error("Failed to register");
    }
};

export const signOut = async () => {
    try {
        await auth.api.signOut();
    } catch (error) {
        console.error("Error during sign-out:", error);
        throw new Error("Failed to sign out");
    }
};
