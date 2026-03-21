import { useAuthStore } from "@/app/store/useAuthStore";
import { isEmail } from "@/helpers/isEmail.helper";
import { SigninForm } from "@/modules/auth/components/SigninForm";
import { useSignin } from "@/modules/auth/hooks/useSignin";
import { SigninSchema } from "@/modules/auth/schemas/signin.schema";
import { useNavigate } from "react-router-dom";

export const SigninPage = () => {
    const { mutate, isPending } = useSignin();
    const setAccount = useAuthStore((state) => state.setAccount);
    const navigate = useNavigate();

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
                const fetchResult = data.data;
                setAccount(fetchResult.data);
                navigate("/chat");
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
