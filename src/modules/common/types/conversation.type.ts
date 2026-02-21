import type { ConversationType } from "@/enums/conversation.enum";
import type { ProfileResponse } from "@/types/profile.type";

export interface ConversationResponse {
    id: string;
    title: string | null;
    avatar_url: string | null;
    type: ConversationType;
    creator: ProfileResponse | null;
}
