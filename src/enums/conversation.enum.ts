export const ConversationEnum = {
    PRIVATE: "private",
    GROUP: "group",
    COMMUNITY: "community",
} as const;

export type ConversationEnum = (typeof ConversationEnum)[keyof typeof ConversationEnum];
