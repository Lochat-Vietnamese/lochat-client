import { ConversationEnum } from "@/enums/conversation.enum";
import z from "zod";

export const ConversationSchema = z.object({
    id: z.string(),
    title: z.string().nullish(),
    avatar_url: z.string().nullish(),
    type: z.enum(ConversationEnum),
    creator_id: z.string().nullish(),
});

export type ConversationType = z.infer<typeof ConversationSchema>;