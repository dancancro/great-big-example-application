export interface ClaimRebuttal {
  id: string,
  claimId: string,
  rebuttalId: string,
  sortOrder: number
}

export const initialClaimRebuttal: ClaimRebuttal = {
  id: null,
  claimId: null,
  rebuttalId: null,
  sortOrder: 0
};