import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { SearchFriendRequest, SearchFriendResponse } from "@/modules/user/types/searchFriend.type";
import { searchFriend } from "@/modules/user/services/searchFriend.service";

export const useSearchFriend = (
    params: SearchFriendRequest,
    options?: Omit<
        UseQueryOptions<SearchFriendResponse>,
        "queryKey" | "queryFn"
    >
) => {
    return useQuery({
        queryKey: ["profile-conversations", params],
        queryFn: async () => {
            const res = await searchFriend(params);
            return res.data;
        },
        ...options
    });
};