import { cn } from "@/lib/utils";
import { ConversationItem } from "@/modules/chat/components/ConversationItem";
import { useLoadProfileConversation } from "../hooks/useLoadProfileConversation";
import { useEffect, useMemo, useState } from "react";
import { useAuthStore } from "@/app/store/useAuthStore";
import { useLocation, useNavigate } from "react-router-dom";

type ConversationListProps = {
    className?: string
};

export const ConversationList = ({ className }: ConversationListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const account = useAuthStore((state) => state.account);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSelectedId(location.pathname.split("/").pop() ?? null);
    }, [location.pathname]);

    const { data, isLoading, error } = useLoadProfileConversation({
        profile_id: account?.profile.id ?? "",
        page: currentPage,
        page_size: 10,
        is_active: true
    });

    const sortedMemberships = useMemo(() => {
        const memberships = data?.data ?? []
        return [...memberships].sort(
            (a, b) => Number(new Date(b.last_accessed)) - Number(new Date(a.last_accessed))
        )
    }, [data?.data]);

    const chatContentNavigate = (id: string) => {
        navigate(`/chat/${id}`)
    }

    return (
        <div className={cn(
            "h-full w-full flex justify-center items-center",
            className,
            sortedMemberships.length > 0 && "h-fit flex-col gap-4 justify-start px-2 items-start")}>
            {
                isLoading &&
                <div className="h-8 w-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
            }
            {
                error && error.message
            }
            {
                sortedMemberships.length === 0 ? (
                    <div className="">
                        <div className="w-full flex justify-center items-center text-muted-foreground">
                            Chưa có cuộc trò chuyện nào
                        </div>
                    </div>
                ) : (
                    sortedMemberships.map((membership) => (
                        <ConversationItem
                            isOpeningChat={selectedId === membership.conversation.id}
                            onClick={() => {
                                chatContentNavigate(membership.conversation.id)
                            }}
                            key={membership.conversation.id}
                            avatarUrl={membership.conversation.avatar_url}
                            conversationName={membership.conversation.title}
                            lastMessage={membership.last_accessed}
                        />
                    ))
                )
            }
        </div>
    );
};