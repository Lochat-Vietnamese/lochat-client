export const MessageType = {
    TEXT: 'text',
    MEDIA: 'media',
    SYSTEM: 'system',
} as const;

export type MessageType = (typeof MessageType)[keyof typeof MessageType];
