import { baseRequest } from "@/lib/baseRequest";
import type { SignupRequest, SignupResponse } from "@/features/auth/types/signup.type";


export const signup = async (payload: SignupRequest) => {
    const res = await baseRequest.post<SignupResponse>("/signup", payload);
    return res.data;
};
