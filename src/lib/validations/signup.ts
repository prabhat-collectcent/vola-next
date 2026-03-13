import { z } from "zod";

export const signupSchema = z.object({
        firstname: z.string().min(1, "Firstname is required"),
        lastname: z.string().min(1, "Lastname is required"),
        email: z.string().email("Invalid email"),
        password: z.string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Za-z]/, "Must include letters")
            .regex(/[0-9]/, "Must include numbers")
            .regex(/[^A-Za-z0-9]/, "Must include symbol"),
        repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Passwords do not match",
        path: ["repeatPassword"],
    });

export type SignupInput = z.infer<typeof signupSchema>;
