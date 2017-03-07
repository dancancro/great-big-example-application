import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { EntityEffects } from '../entity/entity.effects';
import * as actions from './claim-rebuttal.actions';
import { entityNames } from '../util';

@Injectable()
export class ClaimRebuttalEffects {
  @Effect()
  protected load$ = this.entityEffects.load$(this.action$, entityNames.CLAIM_REBUTTAL, actions, 'claim-rebuttals');

  constructor(
    private store: Store<ClaimRebuttal>,
    private action$: Actions,
    protected entityEffects: EntityEffects<ClaimRebuttal>
  ) { }
}

