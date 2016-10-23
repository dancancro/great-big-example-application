import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/startWith';

import * as actions from './claim-rebuttal.actions';
import { ClaimRebuttal } from '../claim-rebuttal/claim-rebuttal.model';
import { DataService } from '../data.service';

@Injectable()
export class ClaimRebuttalEffects {
  constructor(private actions$: Actions,
              private dataService: DataService) { }

  @Effect()
  loadData$: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.LOAD)
    .startWith(new actions.LoadAction())
    .switchMap(() => 
      this.dataService.getClaimRebuttals()
      .map((response: ClaimRebuttal[]) =>
        new actions.LoadSuccessAction(response))
      .catch(error => of(new actions.LoadFailAction(error)))
    );
}