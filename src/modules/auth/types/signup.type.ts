import type { SignupType } from "@/modules/auth/schemas/signup.schema";
import type { AccountResponse, ApiResponse } from "@/modules/common";

export type SignupRequest = SignupType;
export type SignupResponse = ApiResponse<AccountResponse>;