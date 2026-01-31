import type { ConversationResponse } from "@/types/conversation.type";
import type { ProfileResponse } from "@/types/profile.type";


export interface MembershipResponse {
    id: string;
    profile: ProfileResponse;
    conversation: ConversationResponse;
    last_accessed: string;
    conversation_name: string;
}
