import { getSession } from "next-auth/react";

export async function getAuthToken() {
    const session = await getSession();
    //@ts-ignore
    return session?.accessToken;
}