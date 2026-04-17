import { ScheduleCriterionData } from "@/app/admin/campaign/edit/[id]/context/types";
import { apiRequest } from "@/lib/apiRequest";
import { api } from "@/lib/axios";

export type getCampaignsParams = {
    search?: string;
    start_date?: string;
    end_date?: string;
    status?: 'ENABLED' | 'PAUSED';
    campaign_type?: 'DISPLAY' | 'PERFORMANCE';
    per_page?: number;
    page_number?: number;
}

export type updateCampaignBasicPayload = {
    name?: string;
    budget?: number;
    cpm_bid_value: number;
};

export type updateCampaignSchedulePayload = {
    addedSchedules?: ScheduleCriterionData[],
    removedSchedules?: number[],
    start_date?: string;
    end_date?: string;
};

export type updateCampaignGeoTargetingPayload = {
    geo_include?: string[],
    geo_exclude?: string[],
    deleted_geo?: number[]
}

export type updateCampaignDemographyPayload = {
    addedParentalStatus?: string[],
    removedParentalStatus?: number[],
    addedGenders?: string[],
    removedGenders?: number[],
    addedAgeRanges?: string[],
    removedAgeRanges?: number[],
    addedIncomeRanges?: string[],
    removedIncomeRanges?: number[]

}

export type updateMiscellaneousPayload = {
    addedDevices?: string[],
    removedDevices?: number[],
    addedIpExclusions?: string[],
    removedIpExclusions?: number[],
    addedCarriers?: string[],
    removedCarriers?: number[]
}

export type uploadCreativePayload = {

    final_url: string;
    business_name: string;
    headlines: string[];
    descriptions: string[];
    marketing_images: string[],
    square_marketing_images: string[],
    adGroupResourceName: string;
    long_headline: string;

}
export const getCampaigns = async (params?: getCampaignsParams) =>
    apiRequest(() =>
        api.get("/api/campaign", {
            params, // automatically converts to query string
        })
    );

export const getCampaignById = async (id: string) => apiRequest(() => api.get(`/api/campaign/${id}`));

export const createCampaign = async (data: any) => apiRequest(() => api.post("/api/campaign", data));

export const updateCampaignBasic = async (id: number, data: updateCampaignBasicPayload) => apiRequest(() => api.put(`/api/campaign/basic/${id}`, data));

export const updateCampaignSchedule = async (id: number, data: updateCampaignSchedulePayload) => apiRequest(() => api.put(`/api/campaign/schedule/${id}`, data));

export const updateCampaignGeoTargeting = async (id: number, data: updateCampaignGeoTargetingPayload) => apiRequest(() => api.put(`/api/campaign/location/${id}`, data));

export const updateCampaignDemographyTargeting = async (id: number, data: updateCampaignDemographyPayload) => apiRequest(() => api.put(`/api/campaign/demographics/${id}`, data));

export const updateCampaignMiscellaneousTargeting = async (id: number, data: updateMiscellaneousPayload) => apiRequest(() => api.put(`/api/campaign/other/${id}`, data));

export const uploadCreatives = async ( data: uploadCreativePayload) => apiRequest(() => api.post(`/api/campaign/creatives`, data));

export const getCampaignReport = async() => apiRequest(() => api.get(`/api/campaign/reports?appId=in.swiggy.android`));

export const getTotalStats = async() => apiRequest(() => api.get(`/api/total-stats`));