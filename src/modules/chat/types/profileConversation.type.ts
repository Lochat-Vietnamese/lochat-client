import type { ApiResponse, MembershipResponse } from "@/modules/common";
import type { LoadProfileConversationsType } from "@/modules/chat/schemas/loadProfileConversation.schema";

export type LoadProfileConversationsRequest = LoadProfileConversationsType

export type LoadProfileConversationResponse = ApiResponse<MembershipResponse[]>;