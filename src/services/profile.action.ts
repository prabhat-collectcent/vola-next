import { apiRequest } from "@/lib/apiRequest";
import { api } from "@/lib/axios";

export const getUserProfile = async () => apiRequest(() => api.get("/api/user/profile"));

export const updateUserProfile = async (data: any) => apiRequest(() => api.put("/api/user/profile", data));

export const updateUserPassword = async (data: any) => apiRequest(() => api.put("/api/user/password", data));

export const sendPasswordResetLink = async (payload: { email: string }) => apiRequest(() =>
    api.post("/api/forgot-password", payload)
)

export const resetPassword = async (payload: { token: string, password: string }) => apiRequest(() =>
    api.post("/api/reset-password", payload)
)
