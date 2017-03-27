import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Claim } from './claim.model';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class ClaimEffects {
  @Effect()
  private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.CLAIM, this.dataService);

  constructor(
    private store: Store<Claim>,
    private actions$: Actions,
    private dataService: DataService
  ) { }
}

