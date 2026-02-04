import { useMutation } from "@tanstack/react-query";
import { signin } from "@/features/auth/services/signin.service";
import type { SigninRequest } from "@/features/auth/types/signin.type";

export const useSignin = () => {
    return useMutation({
        mutationFn: (payload: SigninRequest) => signin(payload),
    });
};
