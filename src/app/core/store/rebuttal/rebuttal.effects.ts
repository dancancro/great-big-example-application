import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Rebuttal } from './rebuttal.model';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class RebuttalEffects {
  @Effect()
  private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.REBUTTAL, this.dataService);

  constructor(
    private store: Store<Rebuttal>,
    private actions$: Actions,
    private dataService: DataService
  ) { }
}

