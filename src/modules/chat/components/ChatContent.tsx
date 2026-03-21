import { cn } from "@/lib/utils";

type ChatContentProps = {
    className?: string
    conversationId?: string
};
export const ChatContent = ({
    className,
    conversationId
}: ChatContentProps) => {

    return (
        <div className={cn("w-full h-full px-4 overflow-hidden overflow-y-auto flex flex-col-reverse border-border! border border-s-0 border-e-0", className)}>
            conversation: {conversationId}
        </div>
    );
};