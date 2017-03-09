import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Hero } from './hero.model';
import { EntityEffects } from '../entity/entity.effects';
import * as actions from './hero.actions';
import { entityNames } from '../util';

@Injectable()
export class HeroEffects {
  @Effect()
  protected load$ = this.entityEffects.load$(this.action$, entityNames.HERO, actions, 'heroes');
  @Effect()
  protected update$ = this.entityEffects.update$(this.action$, entityNames.HERO, actions, 'heroes', this.store);

  constructor(
    private store: Store<Hero>,
    private action$: Actions,
    protected entityEffects: EntityEffects<Hero>
  ) { }
}

