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

  // methods
  isAdding: Function;
};


export const initialClaim: Claim = {
  id: null,
  name: null,
  rebuttalsReordered: false,
  expanded: false,
  isAdding: function (rebuttals) {
    return rebuttals.find((rebuttal) => rebuttal.editing && (rebuttal.id === null)) !== undefined;
  }
};