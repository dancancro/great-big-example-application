import { Action } from '@ngrx/store';

import { typeFor } from '../util';

export const actions = {
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    UPDATE: 'UPDATE'
};

export class SliceAction implements Action {
    actionName = '';
    get type() {
        return typeFor(this.slice, this.actionName);
    }

    constructor(public slice: string, public payload: any) { }
}

export class Load extends SliceAction {
    actionName: string = actions.LOAD;
}

export class LoadFail extends SliceAction {
    actionName: string = actions.LOAD_FAIL;
}

export class LoadSuccess extends SliceAction {
    actionName: string = actions.LOAD_SUCCESS;
}

export class Update extends SliceAction {
    actionName: string = actions.UPDATE;
    constructor(public slice: string, public path: string[], public val: any) {
        super(slice, { path, val });
    }
}
