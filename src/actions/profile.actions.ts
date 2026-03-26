'use server';

import { getUserProfile, updateUserPassword, updateUserProfile } from "@/services/profile.action";

export async function getProfileAction() {
    const result = await getUserProfile();
    return result;

}

export async function updateProfileAction(payload: any) {
    const result = await updateUserProfile(payload);
    return result;
}

export async function updatePasswordAction(payload: any) {
    const result = await updateUserPassword(payload);
    return result;
}