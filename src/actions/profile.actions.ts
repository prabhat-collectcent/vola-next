'use server';

import { getUserProfile, resetPassword, sendPasswordResetLink, updateUserPassword, updateUserProfile } from "@/services/profile.action";

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

export async function sendPasswordResetLinkAction(payload: { email: string }) {
    const result = await sendPasswordResetLink(payload);
    return result;
}

export async function resetPasswordAction(payload: { token: string, password: string }) {
    const result = await resetPassword(payload);
    return result;
}