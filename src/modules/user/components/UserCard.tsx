import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

type UserCardProps = {
    nickname: string
    avatarUrl?: string
    bio?: string
    address?: string
    hometown?: string
    hobbies?: string
    profileID: string
}

export const UserCard = ({
    avatarUrl,
    nickname,
    bio,
    address,
    hometown,
    hobbies,
    profileID
}: UserCardProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex p-2 w-full items-center justify-between gap-8 overflow-hidden">
            <div className="flex items-center gap-4 flex-1">
                <Avatar size="lg">
                    <AvatarFallback>{nickname?.split(" ")[0]}</AvatarFallback>
                    <AvatarImage src={avatarUrl} alt={nickname + "_avt"} />
                </Avatar>
                <div className="flex-1">
                    <div className="font-bold text-lg">{nickname}</div>
                    <div className="flex gap-2 line-clamp-1 wrap-break-word">
                        <div className="font-semibold">Sống tại: {address ?? "Chưa cập nhật"}</div>
                        <div className="font-semibold">Đến từ: {hometown ?? "Chưa cập nhật"}</div>
                    </div>
                    <div className="font-semibold line-clamp-1 wrap-break-word">Sở thích: {hobbies ?? "Chưa cập nhật"}</div>
                    <div className="font-semibold line-clamp-1 wrap-break-word">Tiểu sử: {bio ?? "lorem ip sum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}</div>
                </div>
            </div>
            <Button
                onClick={() => navigate("/chat/"+profileID)}
                className="bg-primary! ring-0! border-none! outline-none! hover:scale-105 active:scale-100 transition-basic"
            >Nhắn tin</Button>
        </div>
    )
}