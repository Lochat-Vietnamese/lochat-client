import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchFriend } from "@/modules/user/hooks/searchFriend.hook";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { isNumberString } from "@/helpers/isNumberString.helper";
import { UserCard } from "../components/UserCard";
import { useAuthStore } from "@/app/store/useAuthStore";

type SeperatedInputData = {
    nickname?: string;
    phone_number?: string;
}

export const AddFriendPage = () => {
    const [keyword, setKeyword] = useState("");
    const [searchData, setSearchData] = useState<SeperatedInputData>({});
    const account = useAuthStore((state) => state.account);
    const { data, isLoading, isError } = useSearchFriend({
        ...searchData,
        page: 1,
        page_size: 10,
        is_active: true
    }, {
        enabled: !!searchData
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            if ((keyword.length === 10 || keyword.length === 11) && keyword.startsWith("0") && isNumberString(keyword)) {
                setSearchData({ phone_number: keyword });
            } else {
                setSearchData({ nickname: keyword });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [keyword]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center p-8">
            <Card className="w-1/2 flex-1 my-8 bg-card text-card-foreground border-border rounded-xl h-full">
                <CardHeader className="border-b border-border">
                    <CardTitle className="text-center text-xl font-semibold">Add Friend</CardTitle>
                    <div className="flex justify-center items-center hover:boder-accent! border-border! rounded-xl focus-within:border-accent!">
                        <Input
                            onChange={(e) => setKeyword(e.target.value)}
                            className="rounded-none rounded-s-lg border border-inherit! border-e-0! ring-0! transition-basic"
                            placeholder="Tìm bạn bè"
                        />
                        <Button className="p-0! rounded-none! rounded-e-lg! border-s-0! text-input-foreground! bg-input/30! outline-none! border border-inherit! hover:text-accent! aspect-square transition-basic!">
                            <Search className="scale-x-[-1]" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-2 overflow-hidden h-full overflow-y-auto flex-1 scrollbar-thumb-muted-foreground scrollbar-track-card scrollbar-thin!">
                    {
                        isLoading && <div>Loading...</div>
                    }
                    {
                        isError && <div>Error</div>
                    }
                    {
                        data && data.data.map((user) => {
                            if (user.id === account?.profile.id) {
                                return null
                            }
                            return (
                                <UserCard
                                    profileID={user.id}
                                    key={user.id}
                                    nickname={user.nickname}
                                    bio={user.bio ?? undefined}
                                    address={user.address ?? undefined}
                                    hometown={user.hometown || undefined}
                                    hobbies={user.hobbies || undefined}
                                    avatarUrl={user.avatar_url || undefined}
                                />
                            )
                        })
                    }
                    {
                        data && data.data.length === 0 &&
                        <div className="text-lg">Hãy nhập tên người dùng hoặc số điện thoại để tìm kiếm</div>
                    }

                </CardContent>
            </Card>
        </div>
    )
};