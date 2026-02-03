import { baseRequest } from "@/lib/baseRequest";
import type { SignupRequest, SignupResponse } from "@/features/auth/types/signup.type";
import type { SigninRequest, SigninResponse } from "@/features/auth/types/signin.type";

export const signup = async (payload: SignupRequest) => {
    return await baseRequest.post<SignupResponse>("/signup", payload);
};

export const signin = async (payload: SigninRequest) => {
    return await baseRequest.post<SigninResponse>("/signin", payload);
};