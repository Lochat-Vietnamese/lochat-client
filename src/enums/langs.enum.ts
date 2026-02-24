export const LangsEnum = {
    VIETNAMESE: "vi",
    ENGLISH: "en",
} as const;

export type LangsEnum = (typeof LangsEnum)[keyof typeof LangsEnum];
