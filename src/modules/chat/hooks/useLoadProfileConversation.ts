import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { LoadProfileConversationsRequest, LoadProfileConversationResponse } from "@/modules/chat/types/profileConversation.type";
import { loadProfileConversations } from "@/modules/chat/services/profileConversation.service";

export const useLoadProfileConversation = (
    params: LoadProfileConversationsRequest,
    options?: Omit<
        UseQueryOptions<LoadProfileConversationResponse>,
        "queryKey" | "queryFn"
    >
) => {
    return useQuery({
        queryKey: ["profile-conversations", params],
        queryFn: async () => {
            const res = await loadProfileConversations(params);
            return res.data;
        },
        ...options
    });
};