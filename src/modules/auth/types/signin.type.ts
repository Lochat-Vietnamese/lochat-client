import type { AccountResponse, ApiResponse } from "@/modules/common";
import type { SigninType } from "@/modules/auth/schemas/signin.schema";

export type SigninRequest = SigninType;
export type SigninResponse = ApiResponse<AccountResponse>;