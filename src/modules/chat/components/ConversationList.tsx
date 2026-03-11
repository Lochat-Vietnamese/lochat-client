import { cn } from "@/lib/utils";
import { ConversationItem } from "@/modules/chat/components/ConversationItem";
import { useLoadProfileConversation } from "../hooks/useLoadProfileConversation";
import { useState } from "react";
import { useAuthStore } from "@/app/store/useAuthStore";

type ConversationListProps = {
    className?: string
};

export const ConversationList = ({ className }: ConversationListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const account = useAuthStore((state) => state.account);
    const { data, isLoading, error } = useLoadProfileConversation({
        profile_id: account?.profile.id ?? "",
        page: currentPage,
        page_size: 10,
        is_active: true
    });

    return (

        isLoading ?
            <div className="h-full w-full flex justify-center items-center">
                <div className="text-primary">
                    {account?.profile.id}
                </div>
                <div className="h-8 w-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
            </div>
            : error ?
                <div className="h-full w-full flex justify-center items-center">{error.message}</div>
                : <div className={cn("w-full h-fit flex flex-col gap-4 justify-start px-2", className)}>
                    {
                        data?.data.data.length === 0 ?
                            <div className="w-full flex justify-center items-center text-muted-foreground">Chưa có cuộc trò chuyện nào</div>
                            :
                            data?.data.data.map((conversation) => (
                                <ConversationItem key={conversation.conversation.id} avatarUrl={conversation.conversation.avatar_url} conversationName={conversation.conversation.title} lastMessage={conversation.last_accessed}></ConversationItem>
                            ))
                    }
                </div>
    );
};