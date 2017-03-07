import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Crisis } from './crisis.model';
import { EntityEffects } from '../entity/entity.effects';
import * as actions from './crisis.actions';
import { entityNames } from '../util';

@Injectable()
export class CrisisEffects {
  @Effect()
  protected load$ = this.entityEffects.load$(this.action$, entityNames.CRISIS, actions, 'crises');
  @Effect()
  protected update$ = this.entityEffects.update$(this.action$, entityNames.CRISIS, actions, 'crises', this.store);

  constructor(
    private store: Store<Crisis>,
    private action$: Actions,
    protected entityEffects: EntityEffects<Crisis>
  ) { }
}

