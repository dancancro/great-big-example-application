import { Action } from '@ngrx/store';

import { typeFor } from '../util';

export const actions = {
    ADD: 'ADD',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_FAIL: 'ADD_FAIL',
    DELETE: 'DELETE',
    DELETE_FAIL: 'DELETE_FAIL',
    DELETE_SUCCESS: 'DELETE_SUCCESS',
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS'
};

export class IDAction implements Action {
    protected actionName = '';
    get type() {
        return typeFor(this.slice, this.actionName);
    }
    constructor(public slice: string, public payload: any) { }
}

export class Add extends IDAction {
    protected actionName: string = actions.ADD;
}

export class AddSuccess extends IDAction {
    protected actionName: string = actions.ADD_SUCCESS;
}

export class AddFail extends IDAction {
    protected actionName: string = actions.ADD_FAIL;
}

export class Load extends IDAction {
    protected actionName: string = actions.LOAD;
    constructor(public slice: string, query: string = null) {
        super(slice, query);
    }
}

export class LoadSuccess extends IDAction {
    protected actionName: string = actions.LOAD_SUCCESS;
}

export class LoadFail extends IDAction {
    protected actionName: string = actions.LOAD_FAIL;
}

export class Delete extends IDAction {
    protected actionName: string = actions.DELETE;
}

export class DeleteSuccess extends IDAction {
    protected actionName: string = actions.DELETE_SUCCESS;
}

export class DeleteFail extends IDAction {
    protected actionName: string = actions.DELETE_FAIL;
}
