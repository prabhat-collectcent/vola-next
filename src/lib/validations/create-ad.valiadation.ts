import { z } from "zod";

export const PerformanceCreativeSchema = z.object({
    headline: z
        .string()
        .min(1, "Headline is required")
        .max(30, "Headline cannot exceed 30 characters"),

    primaryText: z
        .string()
        .min(1, "Primary Text is required")
        .max(90, "Primary Text cannot exceed 90 characters"),
});