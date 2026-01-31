import type { ConversationResponse } from "@/types/conversation.type";
import type { MembershipResponse } from "@/types/membership.type";
import type { MessageType } from "@/enums/message.enum";
import type { MediaResponse } from "@/types/media.type";


export interface MessageResponse {
    id: string;
    conversation: ConversationResponse;
    sender: MembershipResponse;
    type: MessageType;
    content: string | null;
    media: MediaResponse | null;
    reply: string | null;
}
