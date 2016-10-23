export interface Rebuttal {
  // data
  id: string;
  shortName: string;
  longName: string;
  link?: string;
  comments?: string;

  // UI state
  editing: boolean;
  originalId?: string;
}

export const initialRebuttal: Rebuttal = {
  // data
  id: null,
  shortName: null,
  longName: null,
  link: null,
  comments: null,

  // UI state
  editing: false,
  originalId: null
}