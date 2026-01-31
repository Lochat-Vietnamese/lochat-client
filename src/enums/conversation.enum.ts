export const ConversationType = {
    PRIVATE: "private",
    GROUP: "group",
    COMMUNITY: "community",
} as const;

export type ConversationType = (typeof ConversationType)[keyof typeof ConversationType];
