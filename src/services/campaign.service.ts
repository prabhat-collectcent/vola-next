import { apiRequest } from "@/lib/apiRequest";
import { api } from "@/lib/axios";

export const getCampaigns = async () => apiRequest(() => api.get("/campaigns"));

export const createCampaign = async (data: any) => apiRequest(() => api.post("/api/campaign", data));