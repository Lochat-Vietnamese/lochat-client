import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, UserRoundPlus } from "lucide-react";
import { ConversationList } from "@/modules/chat";

type ChatSidebarProps = {
    className?: string
}
export const ChatSidebar = ({ className }: ChatSidebarProps) => {
    return (
        <div className={cn("w-full h-full flex flex-col justify-between items-center bg-card text-card-foreground", className)}>
            <div className="w-full p-2 flex-2 flex flex-col justify-between items-center gap-2 ring-1 ring-muted">
                <div className="flex justify-between items-center w-full h-full px-2">
                    <div className="flex gap-2 items-center">
                        <Avatar>
                            <AvatarFallback>LC</AvatarFallback>
                            <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
                        </Avatar>
                        <div className="text-3xl font-semibold">Lochat</div>
                    </div>
                    <Button className="p-0! rounded-full! text-card-foreground! data-[state=open]:text-accent! bg-card! outline-none! border-none! ring-1! ring-secondary-foreground! data-[state=open]:ring-accent! hover:ring-accent! hover:text-accent! aspect-square">
                        <UserRoundPlus size="100%" className="bg-transparent" />
                    </Button>
                </div>
                <div className="w-full p-2">
                    <Input className="rounded-full border-none! ring-1! focus:ring-ring! ring-muted-foreground!" placeholder="Tìm kiếm đoạn chat" />
                </div>
            </div>
            <div className="w-full p-2 flex-6 overflow-y-auto overflow-x-hidden scrollbar-none! shadow-inner shadow-muted">
                <ConversationList></ConversationList>
            </div>
            <div className="w-full p-2 flex-1 ring-muted ring-1">
                <div className="flex justify-between items-center h-full w-full p-2">
                    <div className="flex gap-2 items-center">
                        <Avatar>
                            <AvatarFallback>LC</AvatarFallback>
                            <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
                        </Avatar>
                        <div className="flex flex-col justify-between items-start">
                            <div className="font-semibold">Lochat</div>
                            <div className="text-xs text-muted-foreground font-light">Online</div>
                        </div>
                    </div>
                    <Button className="p-0! rounded-full! text-card-foreground! data-[state=open]:text-accent! bg-card! outline-none! border-none! ring-1! ring-secondary-foreground! data-[state=open]:ring-accent! hover:ring-accent! hover:text-accent! aspect-square">
                        <Settings size="100%" className="bg-transparent" />
                    </Button>
                </div>
            </div>
        </div>
    );
}