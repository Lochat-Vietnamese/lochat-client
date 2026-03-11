import { useQuery } from "@tanstack/react-query";
import type { LoadProfileConversationsRequest } from "@/modules/chat/types/profileConversation.type";
import { loadProfileConversations } from "@/modules/chat/services/profileConversation.service";

export const useLoadProfileConversation = (params: LoadProfileConversationsRequest) => {
    return useQuery({
        queryKey: ["profile-conversations", params],
        queryFn: () => loadProfileConversations(params),
    });
};