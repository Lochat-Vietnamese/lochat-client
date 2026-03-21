import type { ApiResponse, ProfileResponse } from "@/modules/common";
import type { SearchFriendType } from "@/modules/user/schemas/searchFriend.schema";

export type SearchFriendRequest = SearchFriendType;

export type SearchFriendResponse = ApiResponse<ProfileResponse[]>;