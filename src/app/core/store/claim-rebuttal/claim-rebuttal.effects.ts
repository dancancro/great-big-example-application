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

import * as claimRebuttal from './claim-rebuttal.actions';
import { ClaimRebuttal } from '../claim-rebuttal/claim-rebuttal.model';
import { DataService } from '../data.service';

@Injectable()
export class ClaimRebuttalEffects {
  constructor(private actions$: Actions,
    private dataService: DataService) { }

  @Effect()
  loadData$: Observable<Action> = this.actions$
    .ofType(claimRebuttal.ActionTypes.LOAD)
    .startWith(new claimRebuttal.LoadAction())
    .switchMap(() =>
      this.dataService.getClaimRebuttals()
        .mergeMap(fetchedRecords => Observable.from(fetchedRecords))
        .map((fetchedRecord: ClaimRebuttal) => new claimRebuttal.LoadSuccessAction(fetchedRecord))  // one action per record
        .catch((error) => Observable.of(new claimRebuttal.LoadFailAction(error)))
    );
}
