import { baseRequest } from "@/lib/baseRequest";
import type { LoadProfileConversationResponse, LoadProfileConversationsRequest } from "@/modules/chat/types/profileConversation.type";
import { LoadProfileConversationsSchema } from "@/modules/chat/schemas/loadProfileConversation.schema";

export const loadProfileConversations = async (params: LoadProfileConversationsRequest) => {
    const parsed = LoadProfileConversationsSchema.parse(params);
    const { profile_id, ...meta } = parsed;
    return await baseRequest.get<LoadProfileConversationResponse>(`/profiles/${profile_id}/conversations`, { params: meta });
};