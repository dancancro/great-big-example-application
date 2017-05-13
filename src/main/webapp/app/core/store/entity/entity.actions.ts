import { Action } from '@ngrx/store';

import { typeFor } from '../util';

export const actions = {
    ADD: 'ADD',
    ADD_OPTIMISTICALLY: 'ADD_OPTIMISTICALLY',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_TEMP: 'ADD_TEMP', // Use for adding to a list without using a popup
    ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL',
    DELETE: 'DELETE',
    DELETE_TEMP: 'DELETE_TEMP',
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    SELECT: 'SELECT',
    SELECT_NEXT: 'SELECT_NEXT',
    UPDATE: 'UPDATE',
    UPDATE_EACH: 'UPDATE_EACH',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS'
};

export const TEMP = 'TEMP_ID_VALUE';

export class EntityAction<T> implements Action {
    actionName = '';
    constructor(public slice: string, public payload: any) { }
    get type() {
        return typeFor(this.slice, this.actionName);
    }

}

export class Add<T> extends EntityAction<T> {
    constructor(public slice: string, payload: any = {}) {
        super(slice, Object.assign({}, { dirty: true }, payload));
    }
    // If the payload contains the temp ID value, that means
    // we want the server to assign and ID value, so drop the ID field
    payloadForPost() {
        const newPayload = Object.assign({}, this.payload);
        if (this.payload.id === TEMP) {
            delete newPayload.id;
            delete newPayload.dirty;
        }
        return newPayload;
    }
    actionName: string = actions.ADD;
}

export class AddTemp<T> extends EntityAction<T> {
    constructor(public slice: string, payload: any = {}) {
        super(slice, Object.assign({}, { id: TEMP }, payload));
    }

    actionName: string = actions.ADD_TEMP;
}

/**
 * Use this action to first put in the store and then
 * submit to the server
 */
export class AddOptimistically<T> extends Add<T> {
    constructor(public slice: string, payload: any = {}) {
        super(slice, Object.assign({}, { id: TEMP }, payload));
    }
    actionName: string = actions.ADD_OPTIMISTICALLY;
}

export class AddSuccess<T> extends EntityAction<T> {
    actionName: string = actions.ADD_SUCCESS;
}

export class AddUpdateFail<T> extends EntityAction<T> {
    actionName: string = actions.ADD_UPDATE_FAIL;
}

export class Delete<T> extends EntityAction<T> {
    actionName: string = actions.DELETE;
}

export class DeleteTemp<T> extends EntityAction<T> {
    constructor(public slice: string) {
        super(slice, { id: TEMP })
    }

    actionName: string = actions.DELETE_TEMP;
}

export class Load<T> extends EntityAction<T> {
    actionName: string = actions.LOAD;
}

export class LoadFail<T> extends EntityAction<T> {
    actionName: string = actions.LOAD_FAIL;
}

export class LoadSuccess<T> extends EntityAction<T> {
    actionName: string = actions.LOAD_SUCCESS;
}

export class Update<T> extends EntityAction<T> {
    actionName: string = actions.UPDATE;
}

export class UpdateEach<T> extends EntityAction<T> {
    actionName: string = actions.UPDATE_EACH;
}

export class UpdateSuccess<T> extends EntityAction<T> {
    actionName: string = actions.UPDATE_SUCCESS;
}

export class Select<T> extends EntityAction<T> {
    actionName: string = actions.SELECT;
}

export class SelectNext<T> extends EntityAction<T> {
    actionName: string = actions.SELECT_NEXT;
    constructor(public slice: string) {
        super(null, slice);
    }
}
