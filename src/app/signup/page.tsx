"use client";
import { signUp } from "@/actions/auth";

export default function SignUpPage() {
    const handleSignUp = async () => {
        try {
            const formData = new FormData();
            formData.append("email", "text@example.com");
            formData.append("password", "password123");
            formData.append("name", "John Doe");

            const result = await signUp(formData);
            console.log(result);
        } catch (error) {
            console.error("Error during sign-up:", error);
        }
    };

    return <button onClick={handleSignUp}>Sign Up</button>;
}
