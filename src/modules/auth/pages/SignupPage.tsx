import { useSignup } from "@/modules/auth/hooks/useSignup";
import type { SignupRequest } from "@/modules/auth/types/signup.type";
import { SignupForm } from "@/modules/auth/components/SignupForm";

export const SignupPage = () => {
    const { mutate, isPending } = useSignup();

    const onSubmitHandler = (data: SignupRequest) => {
        mutate(data, {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <SignupForm
                loading={isPending}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};
