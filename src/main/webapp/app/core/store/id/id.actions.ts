import { Action } from '@ngrx/store';

import { typeFor, QueryPayload } from '../util';
import { SliceAction } from '../slice/slice.actions';
import { actions as sliceActions } from '../slice/slice.actions';
import { RootState } from '../';

export const actions = {
    ...sliceActions,
    ADD: 'ADD',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_FAIL: 'ADD_FAIL',
    DELETE: 'DELETE',
    DELETE_FAIL: 'DELETE_FAIL',
    DELETE_SUCCESS: 'DELETE_SUCCESS',
};

export class Add extends SliceAction {
    protected actionName: string = actions.ADD;
}

export class AddSuccess extends SliceAction {
    protected actionName: string = actions.ADD_SUCCESS;
}

export class AddFail extends SliceAction {
    protected actionName: string = actions.ADD_FAIL;
}

export class Load extends SliceAction {
    protected actionName: string = actions.LOAD;
    constructor(public slice: keyof RootState, query: QueryPayload = null) {
        super(slice, query);
    }
}

export class LoadSuccess extends SliceAction {
    protected actionName: string = actions.LOAD_SUCCESS;
}

export class LoadFail extends SliceAction {
    protected actionName: string = actions.LOAD_FAIL;
}

export class Delete extends SliceAction {
    protected actionName: string = actions.DELETE;
}

export class DeleteSuccess extends SliceAction {
    protected actionName: string = actions.DELETE_SUCCESS;
}

export class DeleteFail extends SliceAction {
    protected actionName: string = actions.DELETE_FAIL;
}
