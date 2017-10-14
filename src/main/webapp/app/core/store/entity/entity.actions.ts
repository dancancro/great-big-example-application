import { PayloadAction } from '../util';
import { Entity } from './entity.model';
import { SliceAction } from '../slice/slice.actions';
import { actions as sliceActions } from '../slice/slice.actions';
import { typeFor, QueryPayload } from '../util';
import { RootState } from '../';

export const actions = {
    ...sliceActions,
    ADD: 'ADD',
    ADD_OPTIMISTICALLY: 'ADD_OPTIMISTICALLY',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_TEMP: 'ADD_TEMP', // Use for adding to a blank to the store so users can fill in before submitting to server
    ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL',
    DELETE: 'DELETE',
    DELETE_FAIL: 'DELETE_FAIL',
    DELETE_SUCCESS: 'DELETE_SUCCESS',
    DELETE_TEMP: 'DELETE_TEMP',
    ASYNC: 'ASYNC',
    ASYNC_FAIL: 'ASYNC_FAIL',
    ASYNC_SUCCESS: 'ASYNC_SUCCESS',
    PATCH: 'PATCH',
    PATCH_EACH: 'PATCH_EACH',
    PATCH_FAIL: 'PATCH_FAIL',
    PATCH_SUCCESS: 'PATCH_SUCCESS',
    RESTORE_TEMP: 'RESTORE_TEMP',
    SELECT: 'SELECT',
    SELECT_NEXT: 'SELECT_NEXT',
    UNLOAD: 'UNLOAD'
};

export const TEMP = 'TEMP_ID_VALUE';

export class EntityAction<T extends Entity> extends SliceAction implements PayloadAction {
    constructor(public slice: keyof RootState, public payload: T) {
        super(slice, payload);
    }
}

export class Add<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.ADD;
    constructor(public slice: keyof RootState, public payload: any = {}) {
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
export class AddTemp<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.ADD_TEMP;
    constructor(public slice: keyof RootState, payload: any = {}) {
        super(slice, Object.assign({}, payload, (payload.id ? {} : { id: TEMP })));
    }
}

/**
 * Use this action to first put in the store and then
 * submit to the server
 */
export class AddOptimistically<T extends Entity> extends Add<T> {
    protected actionName: string = actions.ADD_OPTIMISTICALLY;
    constructor(public slice: keyof RootState, payload: any = {}) {
        super(slice, Object.assign({}, { id: TEMP }, payload));
    }
}

export class AddSuccess<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.ADD_SUCCESS;
}

export class AddUpdateFail<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.ADD_UPDATE_FAIL;
}

export class Delete<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.DELETE;
}

export class DeleteFail<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.DELETE_FAIL;
}

export class DeleteSuccess<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.DELETE_SUCCESS;
}

export class DeleteTemp<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.DELETE_TEMP;
    constructor(public slice: keyof RootState) {
        super(slice, <T>{ id: TEMP })
    }
}

export class RestoreTemp<T extends Entity> extends DeleteTemp<T> {
    protected actionName: string = actions.RESTORE_TEMP;
}

export class Load<T extends Entity> extends SliceAction implements PayloadAction {
    protected actionName: string = actions.LOAD;
    constructor(public slice: keyof RootState, public payload: QueryPayload | Entity = null) {  // takes an any, not an entity
        super(slice, payload);
    }
}

export class LoadFail<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.LOAD_FAIL;
}

export class Async<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.ASYNC;
}

export class AsyncFail<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.ASYNC_FAIL;
}

export class AsyncSuccess<T extends Entity> extends SliceAction {
    protected actionName: string = actions.ASYNC_SUCCESS;
    constructor(public slice: keyof RootState, public payload: T[]) {
        super(slice, payload);
    }
}

export class LoadSuccess<T extends Entity> extends AsyncSuccess<T> {  // this makes Effect loadFromRemote$ work
    protected actionName: string = actions.LOAD_SUCCESS;
}

export class Patch<T> extends SliceAction {
    protected actionName: string = actions.PATCH;
}

export class PatchSuccess<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.PATCH_SUCCESS;
}

export class PatchFail<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.PATCH_FAIL;
}

export class Update<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.UPDATE;
}

export class PatchEach<T extends Entity> extends SliceAction {
    protected actionName: string = actions.PATCH_EACH;
}

export class UpdateSuccess<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.UPDATE_SUCCESS;
}

export class Select<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.SELECT;
}

export class SelectNext<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.SELECT_NEXT;
    constructor(public slice: keyof RootState) {
        super(slice, null);
    }
}

export class Unload<T extends Entity> extends EntityAction<T> {
    protected actionName: string = actions.UNLOAD;
    constructor(public slice: keyof RootState) {
        super(slice, null);
    }
}
