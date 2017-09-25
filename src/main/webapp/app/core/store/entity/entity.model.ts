import { EntityAction } from './entity.actions';
import { initialSlice, Slice } from '../slice/slice.model';
import { completeAssign } from '../util';

export interface Entity {
    id: string,
    loading?: boolean;  // not really optional. set during construction
    slice?: Entities<any> // not really optional. set during construction
    [field: string]: any,
}

const initialBaseEntity = {
    id: null,
    slice: null,
    get loading() {
        return this.slice && this.slice.loading;
    }
};

export interface Entities<T extends Entity> extends Slice {
    ids: string[];
    entities: { [id: string]: T };
    selectedEntityId?: string;
    initialEntity: T;
    totalItems: number;
};

export function initialEntities<T extends Entity>(slice: string, initialEntity: T, vals = {}): Entities<T> {

    return completeAssign({}, initialSlice(slice), {
        ids: [],
        entities: {},
        selectedEntityId: null,
        initialEntity: completeAssign({}, initialBaseEntity, initialEntity),
        totalItems: 0
    }, vals);
};
