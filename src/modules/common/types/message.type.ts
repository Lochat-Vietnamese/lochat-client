import type { MessageType } from "@/enums/message.enum";
import type { ConversationResponse, MediaResponse, MembershipResponse } from "@/modules/common";

export interface MessageResponse {
    id: string;
    conversation: ConversationResponse;
    sender: MembershipResponse;
    type: MessageType;
    content: string | null;
    media: MediaResponse | null;
    reply: string | null;
}
