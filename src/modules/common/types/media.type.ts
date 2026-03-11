import type { MediaType } from "@/enums/media.enum";
import type { MembershipResponse } from "@/modules/common";

export interface MediaResponse {
    id: string;
    uploader?: MembershipResponse | null;
    name: string;
    type: MediaType;
    size: number;
    url: string;
}
