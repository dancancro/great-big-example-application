import { PayloadAction } from '../util';

import { typeFor } from '../util';

export const actions = {
    ADD: 'ADD',
    ADD_OPTIMISTICALLY: 'ADD_OPTIMISTICALLY',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_TEMP: 'ADD_TEMP', // Use for adding to a blank to the store so users can fill in before submitting to server
    ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL',
    DELETE: 'DELETE',
    DELETE_FAIL: 'DELETE_FAIL',
    DELETE_SUCCESS: 'DELETE_SUCCESS',
    DELETE_TEMP: 'DELETE_TEMP',
    LOAD: 'LOAD',
    LOAD_FAIL: 'LOAD_FAIL',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_ALL: 'LOAD_ALL',
    LOAD_ALL_FAIL: 'LOAD_ALL_FAIL',
    LOAD_ALL_SUCCESS: 'LOAD_ALL_SUCCESS',
    SELECT: 'SELECT',
    SELECT_NEXT: 'SELECT_NEXT',
    UPDATE: 'UPDATE',
    PATCH_EACH: 'PATCH_EACH',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS',
    PATCH: 'PATCH',
    PATCH_SUCCESS: 'PATCH_SUCCESS',
    PATCH_FAIL: 'PATCH_FAIL'
};

export const TEMP = 'TEMP_ID_VALUE';

export class EntityAction<T> implements PayloadAction {
    protected actionName = '';
    constructor(public slice: string, public payload: any) { }
    get type() {
        return typeFor(this.slice, this.actionName);
    }

}

export class Add<T> extends EntityAction<T> {
    protected actionName: string = actions.ADD;
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
}

/**
 * Create a temporary entity to go into the store but not to the server or be
 * validated. If the id of the payload is missing or null
 * then use the TEMP value. Otherwise use the payload.id value
 */
export class AddTemp<T> extends EntityAction<T> {
    protected actionName: string = actions.ADD_TEMP;
    constructor(public slice: string, payload: any = {}) {
        super(slice, Object.assign({}, payload, (payload.id ? {} : { id: TEMP })));
    }
}

/**
 * Use this action to first put in the store and then
 * submit to the server
 */
export class AddOptimistically<T> extends Add<T> {
    protected actionName: string = actions.ADD_OPTIMISTICALLY;
    constructor(public slice: string, payload: any = {}) {
        super(slice, Object.assign({}, { id: TEMP }, payload));
    }
}

export class AddSuccess<T> extends EntityAction<T> {
    protected actionName: string = actions.ADD_SUCCESS;
}

export class AddUpdateFail<T> extends EntityAction<T> {
    protected actionName: string = actions.ADD_UPDATE_FAIL;
}

export class Delete<T> extends EntityAction<T> {
    protected actionName: string = actions.DELETE;
}

export class DeleteFail<T> extends EntityAction<T> {
    protected actionName: string = actions.DELETE_FAIL;
}

export class DeleteSuccess<T> extends EntityAction<T> {
    protected actionName: string = actions.DELETE_SUCCESS;
}

export class DeleteTemp<T> extends EntityAction<T> {
    protected actionName: string = actions.DELETE_TEMP;
    constructor(public slice: string) {
        super(slice, { id: TEMP })
    }
}

export class Load<T> extends EntityAction<T> {
    protected actionName: string = actions.LOAD;
}

export class LoadFail<T> extends EntityAction<T> {
    protected actionName: string = actions.LOAD_FAIL;
}

export class LoadSuccess<T> extends EntityAction<T> {
    protected actionName: string = actions.LOAD_SUCCESS;
}

export class LoadAll<T> extends EntityAction<T> {
    protected actionName: string = actions.LOAD_ALL;
}

export class LoadAllFail<T> extends EntityAction<T> {
    protected actionName: string = actions.LOAD_ALL_FAIL;
}

export class LoadAllSuccess<T> extends EntityAction<T> {
    protected actionName: string = actions.LOAD_ALL_SUCCESS;
}

export class Patch<T> extends EntityAction<T> {
    protected actionName: string = actions.PATCH;
}

export class PatchSuccess<T> extends EntityAction<T> {
    protected actionName: string = actions.PATCH_SUCCESS;
}

export class PatchFail<T> extends EntityAction<T> {
    protected actionName: string = actions.PATCH_FAIL;
}

export class Update<T> extends EntityAction<T> {
    protected actionName: string = actions.UPDATE;
}

export class PatchEach<T> extends EntityAction<T> {
    protected actionName: string = actions.PATCH_EACH;
}

export class UpdateSuccess<T> extends EntityAction<T> {
    protected actionName: string = actions.UPDATE_SUCCESS;
}

export class Select<T> extends EntityAction<T> {
    protected actionName: string = actions.SELECT;
}

export class SelectNext<T> extends EntityAction<T> {
    protected actionName: string = actions.SELECT_NEXT;
    constructor(public slice: string) {
        super(null, slice);
    }
}
