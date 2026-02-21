import type { SignupType } from "@/modules/auth/schemas/signup.schema";
import type { AccountResponse } from "@/types/account.type";
import type { ApiResponse } from "@/types/apiRespone.type";

export type SignupRequest = SignupType;
export type SignupResponse = ApiResponse<AccountResponse>;