import z from "zod";

export const ProfileConversationSchema = z.object({
    id: z.string(),
    profile_id: z.string(),
    conversation_id: z.string(),
    last_accessed: z.date().nullish(),
    conversation_name: z.string(),
});

export type ProfileConversationType = z.infer<typeof ProfileConversationSchema>;