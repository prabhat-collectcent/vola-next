'use server';

import { getMobileCarriers, searchLocations } from "@/services/metadata.service";

export async function searchLocationAction(payload: { query: string }) {

  const result = await searchLocations(payload.query);

  return result;
}

export async function getMobileCarrersAction() {
  const result = await getMobileCarriers();
  return result;
}
