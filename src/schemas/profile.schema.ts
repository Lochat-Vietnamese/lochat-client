import { COMMON } from "@/constants/common.constant";
import { Province } from "@/enums/province.enum";
import { z } from "zod";


export const CreateProfileSchema = z.object({
    nickname: z
        .string()
        .regex(/^[\p{L}0-9]+( [\p{L}0-9]+)*$/u, "Tên tài khoản chỉ được chứa chữ, số và khoảng trắng")
        .min(3, { message: "Tên tài khóa phải có ít nhất 3 ký tự" }),
    phone_number: z
        .string()
        .regex(/^[0-9]+$/, "Số điện thoại chỉ được chứa ký tự số")
        .min(10, { message: "Số điện thoại phải có ít nhất 10 ký tự" })
        .max(11, { message: "Số điện thoại không vượt quá 11 ký tự" }),
    dob: z
        .date()
        .refine(
            (value) => {
                const today = new Date()
                let age = today.getFullYear() - value.getFullYear()

                const m = today.getMonth() - value.getMonth()
                if (m < 0 || (m === 0 && today.getDate() < value.getDate())) {
                    age--
                }

                return age >= COMMON.MIN_AGE
            },
            {
                message: `Tuổi phải từ ${COMMON.MIN_AGE} trở lên`,
            }
        ),
    bio: z.string().nullish(),
    avatar_url: z.url({ message: "URL không hợp lệ" }).nullish(),
    address: z.string().nullish(),
    hometown: z.enum(Province).nullish(),
    education: z.string().nullish(),
    work: z.string().nullish(),
    hobbies: z.string().nullish(),
})

export type CreateProfileType = z.infer<typeof CreateProfileSchema>