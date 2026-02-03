import { z } from "zod";

export const SigninSchema = z.object({
    username: z
        .string()
        .regex(/^[a-zA-Z0-9]+$/, "Tên tài khoản chỉ được chứa chữ và số")
        .min(5, { message: "Tên đăng nhập phải có ít nhất 5 ký tự" })
        .optional(),
    email: z
        .email()
        .optional(),
    password: z
        .string()
        // .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
})
.refine(
    (data) => !!data.username || !!data.email,
    {
        message: "Phải nhập username hoặc email",
        path: ["username"],
    }
);

export type SigninType = z.infer<typeof SigninSchema>;