import { Outlet } from "react-router-dom";
import { ChatSidebar } from "@/modules/chat/components/ChatSidebar";

export const ChatLayout = () => {
    return (
        <div className="h-screen p-8 bg-background">
            <div className="flex h-full rounded-xl overflow-hidden gap-4 bg-background p-2">
                <aside className="hidden md:flex flex-col w-1/4 rounded-xl ring-border ring-1 overflow-hidden">
                    <ChatSidebar />
                </aside>
                <main className="flex-1 flex items-center justify-center bg-card rounded-xl ring-border ring-1 text-card-foreground overflow-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};