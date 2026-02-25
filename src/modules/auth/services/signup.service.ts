import { baseRequest } from "@/lib/baseRequest";
import type { SignupRequest, SignupResponse } from "@/modules/auth/types/signup.type";

export const signup = async (payload: SignupRequest) => {
    return await baseRequest.post<SignupResponse>("/signup", payload);
};