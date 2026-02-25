import { COMMON } from "@/constants/common.constant";
import { Province } from "@/enums/province.enum";
import { z } from "zod";


export const CreateProfileSchema = z.object({
    nickname: z
        .string({
            error: (issue) => issue.input === undefined ? "validation:signup.nickname.required" : "validation:signup.nickname.type"
        })
        .regex(/^[\p{L}0-9]+( [\p{L}0-9]+)*$/u, "validation:signup.nickname.regex")
        .min(3, { message: `validation:signup.nickname.min$${3}` }),
    phone_number: z
        .string({
            error: (issue) => issue.input === undefined ? "validation:signup.phone_number.required" : "validation:signup.phone_number.type"
        })
        .regex(/^[0-9]+$/, "validation:signup.phone_number.regex")
        .min(10, { message: `validation:signup.phone_number.min$${10}` })
        .max(11, { message: `validation:signup.phone_number.max$${11}` }),
    dob: z
        .date({
            error: (issue) => issue.input === undefined ? "validation:signup.dob.required" : "validation:signup.dob.type"
        })
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
                message: `validation:signup.dob.refine.message$${COMMON.MIN_AGE}`,
            }
        ),
    bio: z.string().nullish(),
    avatar_url: z.url({ message: "validation:signup.avatar_url.type" }).nullish(),
    address: z.string().nullish(),
    hometown: z.enum(Province).nullish(),
    education: z.string().nullish(),
    work: z.string().nullish(),
    hobbies: z.string().nullish(),
})

export type CreateProfileType = z.infer<typeof CreateProfileSchema>