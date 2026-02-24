import type { ProfileResponse } from "@/modules/common";

export interface AccountResponse {
    id: string;
    username: string;
    email: string;
    profile: ProfileResponse;
};