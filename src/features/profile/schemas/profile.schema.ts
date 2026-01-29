import { z } from "zod";

export const CreateProfileSchema = z.object({
    nickname: z.string().regex(/^[a-zA-Z0-9]+$/, "Tên tài khoản chỉ được chứa chữ và số").min(3, { message: "Tên tài khóa phải có ít nhất 3 ký tự" }),
    phone_number: z.string().regex(/^[0-9]+$/, "Số điện thoại chỉ được chứa ký tự số").min(10, { message: "Số điện thoại phải có ít nhất 10 ký tự" }).max(11, { message: "Số điện thoại không vượt quá 11 ký tự" }),
    dob: z.date(), //thêm check tuổi (tuổi lấy từ env hoặc constant)
    bio: z.string().nullish(),
    avatar_url: z.url({ message: "URL không hợp lệ" }).nullish(),
    address: z.string().nullish(),
    hometown: z.string().nullish(), // thêm enum
    education: z.string().nullish(),
    work: z.string().nullish(),
    hobbies: z.string().nullish(),
})

export type CreateProfileType = z.infer<typeof CreateProfileSchema>