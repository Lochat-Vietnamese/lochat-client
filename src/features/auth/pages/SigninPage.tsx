import { SigninForm } from "@/features/auth/components/SigninForm";
import { useSignin } from "@/features/auth/hooks/useSignin";
import { SigninSchema } from "@/features/auth/schemas/signin.schema";

export const SigninPage = () => {
    const { mutate, isPending } = useSignin();

    const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const onSubmitHandler = (data: {
        usernameOrEmail: string;
        password: string;
    }) => {
        const seperatedData = {
            password: data.password,
            ...(isEmail(data.usernameOrEmail)
                ? { email: data.usernameOrEmail }
                : { username: data.usernameOrEmail }),
        };

        const parsed = SigninSchema.safeParse(seperatedData);

        if (!parsed.success) {
            return;
        }

        const payload = parsed.data;
        
        mutate(payload, {
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
            <SigninForm
                loading={isPending}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};
