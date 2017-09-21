import * as commonActions from '../entity/entity.actions';
import { initialSlice, Slice } from '../slice/slice.model';

export interface IDs extends Slice {
    ids: string[];
};

export function initialIDs(slice: string, vals: any = {}): IDs {
    return Object.assign({}, initialSlice(slice), {
        ids: [],
    }, vals);
};
