import { BaseEntity } from './../../shared';

export class ClaimRebuttal implements BaseEntity {
    constructor(
        public id?: number,
        public claimId?: number,
        public rebuttalId?: number,
        public sortOrder?: number,
    ) {
    }
}
