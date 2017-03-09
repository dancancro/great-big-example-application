import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Claim } from './claim.model';
import { EntityEffects } from '../entity/entity.effects';
import * as actions from './claim.actions';
import { entityNames } from '../util';

@Injectable()
export class ClaimEffects {
  @Effect()
  protected load$ = this.entityEffects.load$(this.action$, entityNames.CLAIM, actions, 'claims');

  constructor(
    private store: Store<Claim>,
    private action$: Actions,
    protected entityEffects: EntityEffects<Claim>
  ) { }
}

