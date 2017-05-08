import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Rebuttal } from './rebuttal.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class RebuttalEffects {
  @Effect()
  private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.REBUTTAL, this.dataService);

  constructor(
    private store: Store<Rebuttal>,
    private actions$: Actions,
    private dataService: RESTService
  ) { }
}

