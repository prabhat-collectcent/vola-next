import { z } from "zod";

export const CampaignBasicSchema = z.object({
    name: z.string().min(3, "campaign name is required")  
    })

export type CampaignBasicInput = z.infer<typeof CampaignBasicSchema>;

export const CampaignBudgetSchema = z.object({
    budget: z.number().min(1, "budget must be greater than 0"),
    bid_value: z.number().min(0.0001, "bid value must be greater than 0")
})

export type CampaignBudgetInput = z.infer<typeof CampaignBudgetSchema>;
