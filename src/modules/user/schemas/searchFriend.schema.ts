import z from "zod";

export const SearchFriendSchema = z.object({
    nickname: z.string().nullish(),
    phone_number: z.string().nullish(),
    page: z.number()
        .min(1)
        .nullish(),
    page_size: z.number()
        .min(10)
        .max(50)
        .nullish(),
    is_active: z.boolean().nullish(),
})

export type SearchFriendType = z.infer<typeof SearchFriendSchema>