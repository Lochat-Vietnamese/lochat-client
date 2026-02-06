import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SignupRequest } from "../types/signup.type";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon } from "lucide-react";
import { format } from "date-fns";
import { SignupSchema } from "@/features/auth/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

type SignupFormProps = {
    loading: boolean;
    onSubmit: (data: SignupRequest) => void
}

export const SignupForm = ({ loading, onSubmit }: SignupFormProps) => {
    const { t } = useTranslation(["auth", "error", "validation"]);

    const { register, handleSubmit, control, formState: { errors } } = useForm<SignupRequest>({
        resolver: zodResolver(SignupSchema)
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>{t("auth:signup.form.title")}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-3 gap-2">
                    <div className="w-full grid grid-rows-2">
                        <Label>{t("auth:signup.form.field.username.label")}</Label>
                        <Input
                            type="text"
                            placeholder={t("auth:signup.form.field.username.placeholder")}
                            {...register("username")}
                        />
                        {errors.username && (
                            <p className="text-sm text-destructive">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div className="w-full grid grid-rows-2">
                        <Label>{t("auth:signup.form.field.email.label")}</Label>
                        <Input
                            type="text"
                            placeholder={t("auth:signup.form.field.email.placeholder")}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="w-full grid grid-rows-2">
                        <Label>{t("auth:signup.form.field.password.label")}</Label>
                        <Input
                            type="password"
                            placeholder={t("auth:signup.form.field.password.placeholder")}
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="text-sm text-destructive">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="w-full grid grid-rows-2">
                        <Label>{t("auth:signup.form.field.nickname.label")}</Label>
                        <Input
                            type="text"
                            placeholder={t("auth:signup.form.field.nickname.placeholder")}
                            {...register("profile.nickname")}
                        />
                        {errors.profile?.nickname && (
                            <p className="text-sm text-destructive">
                                {errors.profile?.nickname.message}
                            </p>
                        )}
                    </div>

                    <div className="w-full grid grid-rows-2">
                        <Label>{t("auth:signup.form.field.phone_number.label")}</Label>
                        <Input
                            type="text"
                            placeholder={t("auth:signup.form.field.phone_number.placeholder")}
                            {...register("profile.phone_number")}
                        />
                        {errors.profile?.phone_number && (
                            <p className="text-sm text-destructive">
                                {errors.profile?.phone_number.message}
                            </p>
                        )}
                    </div>

                    <div className="w-full grid grid-rows-2">
                        <Label>{t("auth:signup.form.field.dob.label")}</Label>
                        <Controller
                            control={control}
                            name="profile.dob"
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline">
                                            {field.value
                                                ? format(field.value, "dd/MM/yyyy")
                                                : t("auth:signup.form.field.dob.placeholder")}
                                            <ChevronDownIcon className="ml-2 h-4 w-4" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />

                        {errors.profile?.dob && (
                            <p className="text-sm text-destructive">
                                {errors.profile?.dob.message}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-rows-1">
                        <Button
                            className="w-full fill-primary text-primary-foreground"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? t("auth:signup.form.button.submit.loading") : t("auth:signup.form.button.submit.idle")}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}