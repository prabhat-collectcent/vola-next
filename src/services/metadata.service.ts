import { apiRequest } from "@/lib/apiRequest";
import { api } from "@/lib/axios";

export type searchLocationPayload = {
    country_codes: string[]
}
export const searchLocations = async (query: string, data : searchLocationPayload) => apiRequest(() => api.post(`/api/metadata/locations?q=${query}`, data));

export const getMobileCarriers = async () => apiRequest(() => api.get(`/api/metadata/carriers`));

export const getCountryList = async () => apiRequest(() => api.get(`/api/metadata/country-codes`));

export const getOSVersionList = async () => apiRequest(() => api.get(`/api/metadata/operating-systems`));
