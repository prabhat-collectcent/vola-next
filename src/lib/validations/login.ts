import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .pipe(
            z.string().nonempty("Email required")
        )
        .pipe(
            z.string().email("Invalid email")
        ),
    password: z.string().trim()
        .pipe(
            z.string().nonempty("Password required")
        )
        .pipe(
            z.string().min(8, "Password must be at least 8 characters")
        )
        .pipe(
            z.string().regex(/[A-Za-z]/, "Must include letters")
        )
        .pipe(
            z.string().regex(/[0-9]/, "Must include numbers")
        ).
        pipe(z.string().regex(/[^A-Za-z0-9]/, "Must include symbol"))})
export type LoginInput = z.infer<typeof loginSchema>;
