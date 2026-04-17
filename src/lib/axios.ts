import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
import { getServerSession } from "next-auth";
import {  } from "next-auth/react";

export const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        // "Content-Type": "application/json",
    },
    withCredentials: true,
});

api.interceptors.request.use(async (config) => {
    const session = await getServerSession(authOptions);
    // console.log("session in axios interceptor", session);
    //@ts-ignore
    if (session?.accessToken) {
        //@ts-ignore
        config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return config;
});

// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             console.log("Unauthorized");
//         }

//         return Promise.reject(error);
//     }
// );

