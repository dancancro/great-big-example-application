export interface Rebuttal {
  // data
  id: string;
  shortName: string;
  longName: string;
  link?: string;
  comments?: string;

  // UI state
  editing: boolean;
  original?: Rebuttal;
  isTouched: Function;
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
  original: null,
  isTouched: function () {
    return this.original && (this.original.shortName !== this.shortName ||
      this.original.longName !== this.longName ||
      this.original.link !== this.link ||
      (this.original.comments || '') !== (this.comments || ''));
  }
}