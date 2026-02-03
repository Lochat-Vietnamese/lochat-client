import { useMutation } from "@tanstack/react-query";
import { signin } from "@/features/auth/services/auth.service";
import type { SigninRequest } from "../types/signin.type";

export const useSignin = () => {
    return useMutation({
        mutationFn: (payload: SigninRequest) => signin(payload),
    });
};
