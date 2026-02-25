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
    const { t } = useTranslation(["signin", "error", "validation"]);

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
                <CardTitle>{t("signin:sect_main.form.title").toUpperCase()}</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signin:sect_main.form.field.username.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground"
                                type="text"
                                placeholder={t("signin:sect_main.form.field.username.placeholder")}
                                {...register(
                                    "usernameOrEmail",
                                    {
                                        required: t("validation:signin.refine.message"),
                                        minLength: {
                                            value: 5,
                                            message: t("validation:signin.username.min", { min: 5 }),
                                        },
                                    },
                                )}
                            />
                            {errors.usernameOrEmail && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.usernameOrEmail.message as string)}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signin:sect_main.form.field.password.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground"
                                type="password"
                                placeholder={t("signin:sect_main.form.field.password.placeholder")}
                                {...register(
                                    "password",
                                    {
                                        required: t("validation:signin.password.required"),
                                    },
                                )}
                            />
                            {errors.password && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.password.message as string)}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        className="w-full bg-primary! text-primary-foreground! hover:bg-primary/90! hover:border-ring! hover:text-primary-foreground/90"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? t("signin:sect_main.form.button.submit.loading") : t("signin:sect_main.form.button.submit.idle")}
                    </Button>

                    <a
                        className="w-full text-secondary-foreground! text-center hover:text-accent! hover:underline! text-sm"
                        href="/signup"
                    >
                        {t("signin:sect_main.form.button.signup_navigator.idle")}
                    </a>
                </form>
            </CardContent>
        </Card>
    )
}