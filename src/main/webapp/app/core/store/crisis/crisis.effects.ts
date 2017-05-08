import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Crisis } from './crisis.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class CrisisEffects {
  @Effect()
  private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.CRISIS, this.dataService);
  @Effect()
  private updateToRemote$ = functions.updateToRemote$(this.actions$, slices.CRISIS, this.dataService, this.store);

  constructor(
    private store: Store<Crisis>,
    private actions$: Actions,
    private dataService: RESTService
  ) { }
}

