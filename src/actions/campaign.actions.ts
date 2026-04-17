'use server';

import { createCampaign, getCampaignById, getCampaignReport, getCampaigns, getCampaignsParams, getTotalStats, updateCampaignBasic, updateCampaignBasicPayload, updateCampaignDemographyPayload, updateCampaignDemographyTargeting, updateCampaignGeoTargeting, updateCampaignGeoTargetingPayload, updateCampaignMiscellaneousTargeting, updateCampaignSchedule, updateCampaignSchedulePayload, updateMiscellaneousPayload, uploadCreativePayload, uploadCreatives } from "@/services/campaign.service";

export async function createCampaignAction(payload: any) {

  const result = await createCampaign(payload);
  return result;
}

export async function getCampaignAction(params: getCampaignsParams) {

  const result = await getCampaigns(params);
  return result;

}

export async function getCampaignByIdAction(id: string) {
  const result = await getCampaignById(id);
  return result;
}

export async function updateCampaignBasicAction(id: number, payload: updateCampaignBasicPayload) {
  const result = await updateCampaignBasic(id, payload);
  return result;
}

export async function updateCampaignScheduleAction(id: number, payload: updateCampaignSchedulePayload) {
  const result = await updateCampaignSchedule(id, payload);
  return result;
}

export async function updateGeoCampaignTargetingAction(id: number, payload : updateCampaignGeoTargetingPayload) {
  const result = await updateCampaignGeoTargeting(id, payload);
  return result;
}

export async function updateDemographyTargetingAction(id : number, payload : updateCampaignDemographyPayload) {
  const result = await updateCampaignDemographyTargeting(id, payload);
  return result;
}

export async function updateMiscellaneousTargetingAction(id: number, paylad: updateMiscellaneousPayload) {
  const result = await updateCampaignMiscellaneousTargeting(id, paylad);
  return result;
}

export async function uploadCreativesAction(payload: uploadCreativePayload) {
  const result = await uploadCreatives(payload);
  return result;

}

export async function getCampaignReportAction() {
  const result = await getCampaignReport();
  return result;
}

export async function getTotalStatsAction(){
  const result  =  await getTotalStats();
  return result;
}