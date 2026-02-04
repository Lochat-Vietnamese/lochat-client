import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";


type SigninFormProps = {
    loading?: boolean;
    onSubmit: (data: {
        usernameOrEmail: string;
        password: string;
    }) => void
}

export const SigninForm = ({ loading, onSubmit }: SigninFormProps) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{
        usernameOrEmail: string;
        password: string;
    }>({
        resolver: undefined,
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Đăng nhập</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-3 gap-2">
                    <div className="w-full grid grid-rows-2">
                        <Label>Tên đăng nhập hoặc email:</Label>
                        <Input
                            type="text"
                            placeholder="Tên đăng nhập hoặc email"
                            {...register(
                                "usernameOrEmail",
                                {
                                    required: "Bắt buộc"
                                },
                            )}
                        />
                        {errors.usernameOrEmail && (
                            <p className="text-sm text-destructive">
                                {errors.usernameOrEmail.message}
                            </p>
                        )}
                    </div>

                    <div className="w-full grid grid-rows-2">
                        <Label>Mật khẩu:</Label>
                        <Input
                            type="password"
                            placeholder="Mật khẩu"
                            {...register(
                                "password",
                                {
                                    required: "Bắt buộc",
                                    minLength: {
                                        value: 8,
                                        message: "Mật khẩu phải có ít nhất 8 ký tự",
                                    },
                                },
                            )}
                        />
                        {errors.password && (
                            <p className="text-sm text-destructive">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-rows-1">
                        <Button
                            className="w-full fill-primary text-primary-foreground"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Đang đăng nhập" : "Đăng nhập"}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}