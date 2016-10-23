export interface Entities<T> {
  ids: string[];
  entities: { [id: string]: T };
  loaded?: boolean;
  loading?: boolean;
  selectedEntityId?: string
};

export function initialEntities<T>(): Entities<T>
{
  return {
  ids: [],
  entities: {},
  loaded: false,
  loading: false, 
  selectedEntityId: null
  }
};

export interface IDs {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

export function initialIDs(): IDs {
  return {
    loaded: false,
    loading: false,
    ids: []
  }
};