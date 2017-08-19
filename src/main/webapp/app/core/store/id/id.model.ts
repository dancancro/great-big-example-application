export interface IDs {
  ids: string[];
  loaded: boolean;
  loading: boolean;
}

export function initialIDs(vals: any = {}): IDs {
  return Object.assign({}, {
    ids: [],
    loaded: false,
    loading: false
  }, vals);
}
