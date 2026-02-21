import type { Province } from "@/enums/province.enum";

export type ProfileResponse = {
    id: string;
    nickname: string;
    phone_number: string;
    dob: string;
    bio: string | null;
    avatar_url: string | null;
    address: string | null;
    hometown: Province | null;
    education: string | null;
    work: string | null;
    hobbies: string | null;
};