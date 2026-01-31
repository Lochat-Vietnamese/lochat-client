import type { RelationStatus, RelationType } from "@/enums/relation.enum";
import type { ProfileResponse } from "@/types/profile.type";

export interface RelationResponse {
    id: string;
    type: RelationType;
    requester: ProfileResponse;
    receiver: ProfileResponse;
    status: RelationStatus;
}
