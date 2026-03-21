import { baseRequest } from "@/lib/baseRequest";
import type { SearchFriendRequest, SearchFriendResponse } from "@/modules/user/types/searchFriend.type";
import { SearchFriendSchema } from "@/modules/user/schemas/searchFriend.schema";

export const searchFriend = async (params: SearchFriendRequest) => {
    const parsed = SearchFriendSchema.parse(params);
    return await baseRequest.get<SearchFriendResponse>(`/profiles`, { params: parsed });
};