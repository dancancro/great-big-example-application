import { Rebuttal } from '../rebuttal/rebuttal.model';

export interface Claim {
  // data
  id: string;
  name: string;
  rebuttalIds?: string[];
  rebuttals?: Rebuttal[];
  imgHref?: string;
  imgSrc?: string;
  star?: boolean;

  // UI state
  rebuttalsReordered: boolean;
  expanded: boolean;

};


export const initialClaim: Claim = {
  id: null,
  name: null,
  rebuttalsReordered: false,
  expanded: false

};
