import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type ConversationItemProps = {
    className?: string
    isOpeningChat?: boolean
    avatarUrl?: string | null
    conversationName?: string | null
    lastMessage?: string | null
    onClick?: () => void
}

export const ConversationItem = ({
    className,
    isOpeningChat,
    avatarUrl,
    conversationName,
    lastMessage,
    onClick
}: ConversationItemProps) => {
    return (
        <div onClick={onClick} className={cn("p-4 border-none ring-1 w-full h-fit flex gap-2 items-center rounded-xl shadow-accent hover:scale-105 transition-basic", className, isOpeningChat && "ring-accent shadow-sm", !isOpeningChat && "ring-border shadow-none")}>
            <Avatar>
                <AvatarFallback>{conversationName + "_avatar"}</AvatarFallback>
                <AvatarImage src={avatarUrl || "https://github.com/shadcn.png"} alt={conversationName + "_avatar"} />
            </Avatar>
            <div className="flex flex-col items-start justify-between">
                <div className="font-semibold">{conversationName}</div>
                <div className="text-sm text-muted-foreground line-clamp-1">Bạn: {lastMessage}</div>
            </div>
        </div>
    );
}