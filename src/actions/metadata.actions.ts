'use server';

import { getCountryList, getMobileCarriers, searchLocationPayload, searchLocations } from "@/services/metadata.service";

export async function searchLocationAction(query: string, data: searchLocationPayload) {
  const result = await searchLocations(query, data);
  return result;
}

export async function getMobileCarrersAction() {
  const result = await getMobileCarriers();
  return result;
}

export async function getCountryListAction() {
  const result = await getCountryList();
  return result;
}
