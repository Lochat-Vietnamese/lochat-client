import type { ConversationEnum } from "@/enums/conversation.enum";
import type { ProfileResponse } from "@/modules/common";

export interface ConversationResponse {
    id: string;
    title?: string | null;
    avatar_url?: string | null;
    type: ConversationEnum;
    creator?: ProfileResponse | null;
}
