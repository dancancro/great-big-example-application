import { completeAssign } from '../util';
import { RootState } from '../';

export interface Slice {
    loaded: boolean;
    loading: boolean;
    slice: keyof RootState;
    hasError: boolean;
};

export function initialSlice(slice: string, vals: any = {}): Slice {

    return completeAssign({
        loaded: false,
        loading: false,
        slice,
        hasError: false
    }, vals);
};
