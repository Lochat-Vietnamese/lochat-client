import { useMutation } from "@tanstack/react-query";
import { signin } from "@/modules/auth/services/signin.service";
import type { SigninRequest } from "@/modules/auth/types/signin.type";

export const useSignin = () => {
    return useMutation({
        mutationFn: (payload: SigninRequest) => signin(payload),
    });
};
