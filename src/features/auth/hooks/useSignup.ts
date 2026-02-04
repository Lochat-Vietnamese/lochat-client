import { useMutation } from "@tanstack/react-query";
import { signup } from "@/features/auth/services/signup.service";
import type { SignupRequest } from "@/features/auth/types/signup.type";

export const useSignup = () => {
    return useMutation({
        mutationFn: (payload: SignupRequest) => signup(payload),
    });
};