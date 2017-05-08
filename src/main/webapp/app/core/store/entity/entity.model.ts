import { EntityAction } from './entity.actions';

export interface Entities<T> {
  ids: string[];
  entities: { [id: string]: T };
  loaded?: boolean;
  loading?: boolean;
  selectedEntityId?: string;
  slice: string;
  initialEntity: T;
  getData: Function;
};

export function initialEntities<T>(vals: any = {}, slice: string, actionNames: any, initialEntity): Entities<T> {

  return Object.assign({
    ids: [],
    entities: {},
    loaded: false,
    loading: false,
    selectedEntityId: null,
    slice,
    initialEntity,
  }, vals);
};
