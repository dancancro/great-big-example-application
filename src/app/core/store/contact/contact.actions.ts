import { Action } from '@ngrx/store';
import { Contact } from './contact.model';

import * as entityActions from '../entity/entity.actions';
import { entityNames, BaseAction } from '../util';

// Special actions
export class Next extends BaseAction<Contact> {
  _name = 'Next';
  constructor() {
    super(null, entityNames.CONTACT)
  }
}

// Common actions
export * from '../entity/entity.actions';

// Action types
export type Actions = entityActions.Actions<Contact> | Next;
