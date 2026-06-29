import { z } from "zod";

export const CampaignBasicSchema = z.object({
    name: z.string().min(3, "campaign name is required"),
    budget: z.number().min(1, "budget must be greater than 0"),
    bid_value: z.number().min(0.0001, "bid value must be greater than 0"),
    added_events: z.array(z.string().min(2)),
})

export type CampaignBasicInput = z.infer<typeof CampaignBasicSchema>;

