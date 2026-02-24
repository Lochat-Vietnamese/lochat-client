import type { ConversationResponse, ProfileResponse } from "@/modules/common";


export interface MembershipResponse {
    id: string;
    profile: ProfileResponse;
    conversation: ConversationResponse;
    last_accessed: string;
    conversation_name: string;
}
