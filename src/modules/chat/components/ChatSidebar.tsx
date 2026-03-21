import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, UserRoundPlus } from "lucide-react";
import { ConversationList } from "@/modules/chat";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/useAuthStore";

type ChatSidebarProps = {
    className?: string
}
export const ChatSidebar = ({ className }: ChatSidebarProps) => {
    const navigate = useNavigate();
    const loggingAccount = useAuthStore((state) => state.account);

    return (
        <div className={cn("w-full h-full flex flex-col justify-between bg-card text-card-foreground", className)}>
            <div className="w-full p-2 flex flex-col justify-between items-center gap-2 ring-1 ring-muted">
                <div className="flex justify-between items-center w-full h-full p-2">
                    <div className="text-3xl font-semibold">Lochat</div>
                    <Button onClick={() => navigate("/user")} className="p-0! rounded-full! text-card-foreground! data-[state=open]:text-accent! bg-card! outline-none! border-none! ring-1! ring-secondary-foreground! data-[state=open]:ring-accent! hover:ring-accent! hover:text-accent! aspect-square">
                        <UserRoundPlus size="100%" className="bg-transparent" />
                    </Button>
                </div>
                <div className="w-full p-2">
                    <Input className="rounded-full border-none! ring-1! focus:ring-ring! ring-muted-foreground!" placeholder="Tìm kiếm đoạn chat" />
                </div>
            </div>
            <div className="flex-1 w-full p-2 overflow-y-auto overflow-x-hidden scrollbar-none! shadow-inner shadow-muted">
                <ConversationList />
            </div>
            <div className="w-full p-2 ring-muted ring-1">
                <div className="flex justify-between items-center h-full w-full p-2">
                    <div className="flex gap-2 items-center">
                        <Avatar size="lg">
                            <AvatarFallback>{loggingAccount?.profile.nickname?.split(" ")[0]}</AvatarFallback>
                            <AvatarImage src={loggingAccount?.profile.avatar_url || undefined} alt={loggingAccount?.profile.nickname?.split(" ")[0] + "_avatar"} />
                        </Avatar>
                        <div className="flex flex-col justify-between items-start">
                            <div className="font-semibold">{loggingAccount?.profile.nickname}</div>
                            <div className="text-xs text-muted-foreground font-light gap-1 flex items-center">
                                <div className="rounded-full h-2 w-2 bg-green-500"></div>
                                <div className="leading-none">Online</div>
                            </div>
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