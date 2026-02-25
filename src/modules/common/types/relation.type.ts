import type { RelationStatus, RelationType } from "@/enums/relation.enum";
import type { ProfileResponse } from "@/modules/common";

export interface RelationResponse {
    id: string;
    type: RelationType;
    requester: ProfileResponse;
    receiver: ProfileResponse;
    status: RelationStatus;
}
