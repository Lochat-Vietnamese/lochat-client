export const MediaType = {
    AUDIO: "audio",
    PHOTO: "photo",
    VIDEO: "video",
    GIF: "gif",
    PDF: "pdf",
    UNKNOW: "unknow",
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];
