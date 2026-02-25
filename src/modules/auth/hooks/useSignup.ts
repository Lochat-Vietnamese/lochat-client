import { useMutation } from "@tanstack/react-query";
import { signup } from "@/modules/auth/services/signup.service";
import type { SignupRequest } from "@/modules/auth/types/signup.type";

export const useSignup = () => {
    return useMutation({
        mutationFn: (payload: SignupRequest) => signup(payload),
    });
};