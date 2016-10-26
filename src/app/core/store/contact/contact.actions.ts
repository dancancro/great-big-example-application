import { Action } from '@ngrx/store';
import { Contact } from './contact.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  ADD_CONTACT:             type('[Contacts] Add Contact'),
  ADD_CONTACT_SUCCESS:     type('[Contacts] Add Contact Success'),
  ADD_CONTACT_FAIL:        type('[Contacts] Add Contact Fail'),
  UPDATE_CONTACT:          type('[Contacts] Update Contact'),
  UPDATE_CONTACT_SUCCESS:  type('[Contacts] Update Contact Success'),
  UPDATE_CONTACT_FAIL:     type('[Contacts] Update Contact Fail'),
  LOAD:                    type('[Contacts] Load'),
  LOAD_SUCCESS:            type('[Contacts] Load Success'),
  LOAD_FAIL:               type('[Contacts] Load Fail'),
  NEXT_CONTACT:            type('[Contacts] Get Next'),
};

export class AddContactSuccessAction implements Action {
  type = ActionTypes.ADD_CONTACT_SUCCESS;

  constructor(public payload: Contact) { }
}

export class UpdateContactSuccessAction implements Action {
  type = ActionTypes.UPDATE_CONTACT_SUCCESS;

  constructor(public payload: any) { } // payload: { note }
}

export class UpdateContactFailAction implements Action {
  type = ActionTypes.UPDATE_CONTACT_FAIL;

  constructor() { }
}

/**
 * Load Contact Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Contact) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

export class AddContactAction implements Action {
  type = ActionTypes.ADD_CONTACT;

  constructor(public payload: Contact) { }
}

export class UpdateContactAction implements Action {
  type = ActionTypes.UPDATE_CONTACT;

  constructor(public payload: any) { }
}

export class NextContactAction implements Action {
  type = ActionTypes.NEXT_CONTACT;

  constructor() { }
}

export type Actions
  = AddContactSuccessAction
  | UpdateContactSuccessAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | AddContactAction
  | UpdateContactAction
  | NextContactAction;
