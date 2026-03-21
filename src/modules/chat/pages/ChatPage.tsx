import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { ChatContent } from "@/modules/chat/components/ChatContent"
import { Info, Paperclip, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"

export const ChatPage = () => {
    const param = useParams();
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const initTextareaHeight = useRef<number | null>(null)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const textarea = textareaRef.current
        if (!textarea) return

        initTextareaHeight.current = textarea.scrollHeight
    }, [])


    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = e.currentTarget
        if (initTextareaHeight.current === null) {
            initTextareaHeight.current = textarea.scrollHeight
        }
        const isReachedMax = textarea.scrollHeight > initTextareaHeight.current
        setIsExpanded(isReachedMax)
    }

    return (
        <div className="w-full h-full flex flex-col justify-between bg-card text-card-foreground">
            <div className="p-4 flex items-center justify-between">
                <div className="px-2 flex items-center gap-2">
                    <Avatar size="lg">
                        <AvatarFallback>LC</AvatarFallback>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
                    </Avatar>
                    <div className="flex flex-col justify-between">
                        <div className="text-lg">Jenix</div>
                        <div className="text-xs">Online</div>
                    </div>
                </div>

                <Button className="h-fit w-fit mx-2 text-card-foreground p-0! rounded-full! outline-none! border-none! hover:text-accent! aspect-square">
                    <Info className="w-6! h-6!" />
                </Button>
            </div>
            <ChatContent className="text-card-foreground flex-1" conversationId={param.conversationId} />
            <div className="flex justify-center items-center p-4 px-8">
                <div className={cn("bg-input/30 h-full flex items-end p-2 pe-0 rounded-s-full focus:border-ring! border-muted-foreground! border-e-0! border delay-200", isExpanded && "border-transparent! bg-transparent transition-basic")}>
                    <Button className="w-fit text-card-foreground p-0! rounded-full! outline-none! border-none! hover:text-accent! aspect-square bg-transparent! hover:bg-card!">
                        <Paperclip className="w-5 h-5" />
                    </Button>
                </div>
                <Textarea
                    ref={textareaRef}
                    onChange={handleInput}
                    rows={1}
                    className={cn(
                        "resize-none px-2! max-h-30 overflow-y-auto h-full! min-h-0! rounded-none border-muted-foreground! outline-none! ring-0! scrollbar-none! transition-basic delay-75",
                        isExpanded
                            ? "border rounded-xl"
                            : "border-y border-x-0 rounded-none"
                    )}
                    placeholder="Nhập tin nhắn..."
                />
                <div className={cn("bg-input/30 h-full flex items-end p-2 rounded-e-full focus:border-ring! border-muted-foreground! border-s-0! border delay-200", isExpanded && "border-transparent! bg-transparent transition-basic")}>
                    <Button className="hover:scale-105 active:scale-100 transition-basic text-primary-foreground p-0! rounded-full! outline-none! border-none! aspect-square bg-primary!">
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}