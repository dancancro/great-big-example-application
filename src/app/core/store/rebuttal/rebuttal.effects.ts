import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Rebuttal } from './rebuttal.model';
import { EntityEffects } from '../entity/entity.effects';
import * as actions from './rebuttal.actions';
import { entityNames } from '../util';

@Injectable()
export class RebuttalEffects {
  @Effect()
  protected load$ = this.entityEffects.load$(this.action$, entityNames.REBUTTAL, actions, 'rebuttals');

  constructor(
    private store: Store<Rebuttal>,
    private action$: Actions,
    protected entityEffects: EntityEffects<Rebuttal>
  ) { }
}

