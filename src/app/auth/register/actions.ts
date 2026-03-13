"use server";

import { redirect } from "next/navigation";
import { signupSchema } from "@/lib/validations/signup";

export type FormState = {
    error?: string;
    fieldErrors?: Record<string, string>;
};

export async function signupAction(prevState: FormState, formData: FormData): Promise<FormState> {

    const rawData = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
        repeatPassword: formData.get("repeatPassword"),
    };

    const result = signupSchema.safeParse(rawData);

    if (!result.success) {
        const fieldErrors: Record<string, string> = {};

        result.error.issues.forEach((err: any) => {
            fieldErrors[err.path[0]] = err.message;
        });

        return { fieldErrors };
    }

    try {
        const response = await fetch(
            `${process.env.API_BASE_URL}/api/auth/register`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(rawData),
            }
        );

        const data = await response.json();

        if (!response.ok) {

            // backend validation errors
            if (data.errors) {

                const fieldErrors: Record<string, string> = {};

                Object.keys(data.errors).forEach((key) => {
                    fieldErrors[key] = data.errors[key][0]; // first message
                });

                return {
                    error: data.message || "Validation failed",
                    fieldErrors,
                };
            }
            return { error: data.message || "Registration failed" };
        }



    } catch {
        return { error: "Network error" };
    }

    redirect("/auth/login?success=true");
}
