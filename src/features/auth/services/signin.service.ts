import { baseRequest } from "@/lib/baseRequest";
import type { SigninRequest, SigninResponse } from "@/features/auth/types/signin.type";

export const signin = async (payload: SigninRequest) => {
    return await baseRequest.post<SigninResponse>("/signin", payload);
};