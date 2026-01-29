import { z } from "zod";
import { CreateProfileSchema } from "@/features/profile/schemas/profile.schema";

export const SignupSchema = z.object({
    username: z.string().regex(/^[a-zA-Z0-9]+$/, "Tên tài khoản chỉ được chứa chữ và số").min(5, { message: "Tên đăng nhập phải có ít nhất 5 ký tự" }),
    password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
    email: z.email(),
    profile: CreateProfileSchema
});

export type SignupType = z.infer<typeof SignupSchema>;