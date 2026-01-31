import type { ProfileResponse } from "@/types/profile.type";

export interface AccountResponse {
    id: string;
    username: string;
    email: string;
    profile: ProfileResponse;
};