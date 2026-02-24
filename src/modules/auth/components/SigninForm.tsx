import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";


type SigninFormProps = {
    loading?: boolean;
    onSubmit: (data: {
        usernameOrEmail: string;
        password: string;
    }) => void
}

export const SigninForm = ({ loading, onSubmit }: SigninFormProps) => {
    const { t } = useTranslation(["auth", "error", "validation"]);

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
        <Card className="bg-card text-card-foreground lg:w-1/4 md:w-1/2 w-2/3 border-border shadow-border shadow-md">
            <CardHeader className="text-center text-xl">
                <CardTitle>{t("auth:signin.form.title").toUpperCase()}</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("auth:signin.form.field.username.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground"
                                type="text"
                                placeholder={t("auth:signin.form.field.username.placeholder")}
                                {...register(
                                    "usernameOrEmail",
                                    {
                                        required: "Bắt buộc"
                                    },
                                )}
                            />
                            {errors.usernameOrEmail && (
                                <p className="text-xs text-destructive pt-1">
                                    * {errors.usernameOrEmail.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("auth:signin.form.field.password.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground"
                                type="password"
                                placeholder={t("auth:signin.form.field.password.placeholder")}
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
                                <p className="text-xs text-destructive pt-1">
                                    * {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        className="w-full bg-primary! text-primary-foreground! hover:bg-primary/90! hover:border-ring! hover:text-primary-foreground/90"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? t("auth:signin.form.button.submit.loading") : t("auth:signin.form.button.submit.idle")}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}