import { Action } from '@ngrx/store';

import { typeFor } from '../util';
import { RootState } from '../';
export const actions = {
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    PATCH: 'PATCH',
    UPDATE: 'UPDATE',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS'
};

export class SliceAction implements Action {
    protected actionName = '';
    get type() {
        return typeFor(this.slice, this.actionName);
    }

    constructor(public slice: keyof RootState, public payload?: any) { }
    get verb() {
        return this.actionName;
    }
}

export class Load extends SliceAction {
    protected actionName: string = actions.LOAD;
}

export class LoadFail extends SliceAction {
    protected actionName: string = actions.LOAD_FAIL;
}

export class LoadSuccess extends SliceAction {
    protected actionName: string = actions.LOAD_SUCCESS;
}

export class Patch extends SliceAction {
    protected actionName: string = actions.PATCH;
    constructor(public slice: keyof RootState, path: string[], val: any) {
        super(slice, { path, val });
    }
}

export class Update extends SliceAction {
    protected actionName: string = actions.UPDATE;
    constructor(public slice: keyof RootState, path: string[], val: any) {
        super(slice, { path, val });
    }
}
