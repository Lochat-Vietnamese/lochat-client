import z from "zod";

export const LoadProfileConversationsSchema = z.object({
    profile_id: z.string(),
    page: z.number()
        .min(1)
        .nullish(),
    page_size: z.number()
        .min(10)
        .max(50)
        .nullish(),
    is_active: z.boolean().nullish(),
})

export type LoadProfileConversationsType = z.infer<typeof LoadProfileConversationsSchema>