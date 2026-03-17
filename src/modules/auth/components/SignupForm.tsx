import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SignupRequest } from "@/modules/auth/types/signup.type";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon } from "lucide-react";
import { format } from "date-fns";
import { SignupSchema } from "@/modules/auth/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type SignupFormProps = {
    loading: boolean;
    onSubmit: (data: SignupRequest) => void
}

export const SignupForm = ({ loading, onSubmit }: SignupFormProps) => {
    const { t } = useTranslation(["auth", "error", "validation"]);
    const navigate = useNavigate();
    const { register, handleSubmit, control, formState: { errors } } = useForm<SignupRequest>({
        resolver: zodResolver(SignupSchema),
    });

    return (
        <Card className="bg-card text-card-foreground lg:w-1/4 md:w-1/2 w-2/3 border-border shadow-border shadow-md">
            <CardHeader className="text-center text-xl">
                <CardTitle>{t("signup:sect_main.form.title")}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signup:sect_main.form.field.username.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground bg-muted!"
                                type="text"
                                placeholder={t("signup:sect_main.form.field.username.placeholder")}
                                {...register("username")}
                            />
                            {errors.username && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.username.message?.split("$")[0] as string, { min: errors.username.message?.split("$")[1] })}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signup:sect_main.form.field.email.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground bg-muted!"
                                type="text"
                                placeholder={t("signup:sect_main.form.field.email.placeholder")}
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.email.message as string)}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signup:sect_main.form.field.password.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground bg-muted!"
                                type="password"
                                placeholder={t("signup:sect_main.form.field.password.placeholder")}
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.password.message?.split("$")[0] as string, { min: errors.password.message?.split("$")[1] })}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signup:sect_main.form.field.nickname.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground bg-muted!"
                                type="text"
                                placeholder={t("signup:sect_main.form.field.nickname.placeholder")}
                                {...register("profile.nickname")}
                            />
                            {errors.profile?.nickname && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.profile?.nickname.message?.split("$")[0] as string, { min: errors.profile?.nickname.message?.split("$")[1] })}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signup:sect_main.form.field.phone_number.label")}</Label>
                        <div>
                            <Input
                                className="border-border! focus:border-ring! focus:ring-2! placeholder:text-muted-foreground bg-muted!"
                                type="text"
                                placeholder={t("signup:sect_main.form.field.phone_number.placeholder")}
                                {...register("profile.phone_number")}
                            />
                            {errors.profile?.phone_number && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.profile?.phone_number.message?.split("$")[0] as string, { min: errors.profile?.phone_number.message?.split("$")[1], max: errors.profile?.phone_number.message?.split("$")[1] })}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Label className="text-md">{t("signup:sect_main.form.field.dob.label")}</Label>
                        <div>
                            <Controller
                                control={control}
                                name="profile.dob"
                                render={({ field }) => (
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button className="bg-muted! text-muted-foreground! text-sm! justify-between! border-border! focus:border-ring! focus:text-accent! data-[state=open]:border-ring! data-[state=open]:text-accent! ring-0! outline-none! w-full">
                                                {field.value
                                                    ? format(field.value, "dd/MM/yyyy")
                                                    : t("signup:sect_main.form.field.dob.placeholder")}
                                                <ChevronDownIcon size="100%" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="bg-popover! text-popover-foreground! border-border! w-fit rounded-xl">
                                            <Calendar
                                                className="text-inherit! bg-inherit!"
                                                classNames={{
                                                    day: "bg-card! text-card-foreground! hover:bg-accent!",
                                                    day_selected: "bg-primary! text-primary-foreground! hover:bg-primary!",
                                                    day_today: "border! border-primary! text-primary!",
                                                    // day_outside: "bg-card! text-card-foreground! hover:bg-accent!",
                                                    nav_button: "bg-card! text-card-foreground! hover:bg-primary! hover:text-primary-foreground!",
                                                }}
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                captionLayout="dropdown"
                                                timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                )}
                            />

                            {errors.profile?.dob && (
                                <p className="text-xs text-destructive pt-1">
                                    {t(errors.profile?.dob.message?.split("$")[0] as string, { age: errors.profile?.dob.message?.split("$")[1] })}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        className="w-full bg-primary! text-primary-foreground! hover:bg-primary/90! hover:border-ring! hover:text-primary-foreground/90 outline-none!"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? t("signup:sect_main.form.button.submit.loading") : t("signup:sect_main.form.button.submit.idle")}
                    </Button>

                    <a
                        className="w-full text-secondary-foreground! text-center hover:text-accent! hover:underline! text-sm"
                        onClick={() => navigate("/signin")}
                    >
                        {t("signup:sect_main.form.button.signin_navigator.idle")}
                    </a>
                </form>
            </CardContent>
        </Card>
    );
}