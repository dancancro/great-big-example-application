import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Contact } from './contact.model';
import { EntityEffects } from '../entity/entity.effects';
import * as actions from './contact.actions';
import { entityNames } from '../util';

@Injectable()
export class ContactEffects {
  @Effect()
  protected load$ = this.entityEffects.load$(this.action$, entityNames.CONTACT, actions, 'contacts');
  @Effect()
  protected update$ = this.entityEffects.update$(this.action$, entityNames.CONTACT, actions, 'contacts', this.store);

  constructor(
    private store: Store<Contact>,
    private action$: Actions,
    protected entityEffects: EntityEffects<Contact>
  ) { }
}

