export const RelationStatus = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    REJECTED: "REJECTED",
} as const;

export const RelationType = {
    FRIEND: "FRIEND",
    FOLLOW: "FOLLOW",
    BLOCK: "BLOCK",
} as const;

export type RelationStatus = (typeof RelationStatus)[keyof typeof RelationStatus];
export type RelationType = (typeof RelationType)[keyof typeof RelationType];