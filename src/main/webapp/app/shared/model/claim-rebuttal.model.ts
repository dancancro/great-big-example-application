export interface IClaimRebuttal {
    id?: number;
    claimId?: number;
    rebuttalId?: number;
    sortOrder?: number;
}

export class ClaimRebuttal implements IClaimRebuttal {
    constructor(public id?: number, public claimId?: number, public rebuttalId?: number, public sortOrder?: number) {}
}
