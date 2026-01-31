import type { AccountResponse } from "@/types/account.type";
import type { ApiResponse } from "@/types/apiRespone.type";
import type { SigninType } from "@/features/auth/schemas/signin.schema";

export type SigninRequest = SigninType;
export type SigninResponse = ApiResponse<AccountResponse>;