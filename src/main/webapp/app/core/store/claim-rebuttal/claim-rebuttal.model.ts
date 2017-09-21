import { Entity } from '../entity/entity.model';

export interface ClaimRebuttal extends Entity {
    claimId: string;
    rebuttalId: string;
    sortOrder: number;
}

export const initialClaimRebuttal = {
    id: null,
    claimId: null,
    rebuttalId: null,
    sortOrder: 0
}
