import { apiRequest } from "@/lib/apiRequest";
import { api } from "@/lib/axios";

export const searchLocations = async (query: string) => apiRequest(() => api.get(`/api/metadata/locations?q=${query}`));

export const getMobileCarriers = async () => apiRequest(() => api.get(`/api/metadata/carriers`));
