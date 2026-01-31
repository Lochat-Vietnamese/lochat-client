import { baseRequest } from "@/lib/baseRequest";
import type { SignupRequest, SignupResponse } from "@/features/auth/types/signup.type";

export const signup = async (payload: SignupRequest) => {
    return await baseRequest.post<SignupResponse>("/signup", payload);
};

export const login = async (payload: SignupRequest) => {
    return await baseRequest.post<SignupResponse>("/login", payload);
};