import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Hero } from './hero.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class HeroEffects {
  @Effect()
  private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.HERO, this.dataService);
  @Effect()
  private updateToRemote$ = functions.updateToRemote$(this.actions$, slices.HERO, this.dataService, this.store);
  @Effect()
  private deleteFromRemote$ = functions.deleteFromRemote$(this.actions$, slices.HERO, this.dataService, this.store);

  constructor(
    private store: Store<Hero>,
    private actions$: Actions,
    private dataService: RESTService
  ) { }
}

