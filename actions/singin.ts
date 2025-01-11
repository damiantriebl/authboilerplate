'use server'
import { signIn } from "@/lib/auth";

export async function signInAction( formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log("Signing in with email:", email, password, formData);
    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    try {
        const user = await signIn("credentials", { email, password });
       
        if (!user) {
            throw new Error("Failed to sign in");
        }
        console.log("User signed in:", user);
        return user;
    } catch (error) {
        console.error("Error during sign in:", error);
        throw error;
    }
}