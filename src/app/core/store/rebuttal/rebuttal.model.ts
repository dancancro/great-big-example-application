export interface Rebuttal {
  // data
  id: string;
  shortName: string;
  longName: string;
  link?: string;
  comments?: string;

  // UI state
  editing: boolean;
  isNew?: boolean;
  original?: Rebuttal;
  isTouched: Function;
}

export function initialRebuttal(vals: any = {}): Rebuttal {
  return Object.assign({
    // data
    id: null,
    shortName: null,
    longName: null,
    link: null,
    comments: null,
    isNew: false,

    // UI state
    editing: false,
    original: null,
    isTouched: function () {
      return this.original && (this.original.shortName !== this.shortName ||
        this.original.longName !== this.longName ||
        this.original.link !== this.link ||
        (this.original.comments || '') !== (this.comments || ''));
    }
  }, vals);
}
