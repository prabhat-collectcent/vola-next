'use server';

import { createCampaign } from "@/services/campaign.service";

export async function createCampaignAction(payload: any) {

  const result = await createCampaign(payload);

  return result;
}
