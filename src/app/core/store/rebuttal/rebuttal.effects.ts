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

import * as rebuttals from '../rebuttal/rebuttal.actions';
import { Rebuttal } from '../rebuttal/rebuttal.model';
import { DataService } from '../data.service';

@Injectable()
export class RebuttalEffects {
  constructor(private actions$: Actions,
    private dataService: DataService) { }

  @Effect()
  loadData$: Observable<Action> = this.actions$
    .ofType(rebuttals.ActionTypes.LOAD)
    .startWith(new rebuttals.LoadAction())
    .switchMap(() =>
      this.dataService.getRebuttals()
        .mergeMap(fetchedRebuttals => Observable.from(fetchedRebuttals))
        .map((fetchedRecord: Rebuttal) => new rebuttals.LoadSuccessAction(fetchedRecord))
        .catch(error => of(new rebuttals.LoadFailAction(error)))
    );
}