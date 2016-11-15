export interface ClaimRebuttal {
  id: string,
  claimId: string,
  rebuttalId: string,
  sortOrder: number
}

export function initialClaimRebuttal(vals: any = {}): ClaimRebuttal {
  return Object.assign({
    id: null,
    claimId: null,
    rebuttalId: null,
    sortOrder: 0
  }, vals);
}