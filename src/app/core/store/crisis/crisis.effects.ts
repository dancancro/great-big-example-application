import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';

import { Crisis } from './crisis.model';
import { DataService } from '../data.service';
import * as crisis from './crisis.actions';

@Injectable()
export class CrisisEffects {
  constructor(private store: Store<Crisis>,
    private dataService: DataService,
    private actions$: Actions) { }

  @Effect()
  loadData$: Observable<Action> = this.actions$
    .ofType(crisis.ActionTypes.LOAD)
    .startWith(new crisis.LoadAction())
    .switchMap(() =>
      this.dataService.getCrises()
        .mergeMap(fetchedCrises => Observable.from(fetchedCrises))
        .map((fetchedCrisis: Crisis) => new crisis.LoadSuccessAction(fetchedCrisis))  // one action per crisis
        .catch((error) => Observable.of(new crisis.LoadFailAction(error)))
    );

  @Effect()
  update$ = this.actions$
    .ofType(crisis.ActionTypes.UPDATE_CRISIS,
    crisis.ActionTypes.ADD_CRISIS)
    .withLatestFrom(this.store.select('crises'))
    .switchMap(([{}, crises]) =>
      Observable   // first element is action, but it isn't used
        .from(crises.ids)
        .filter((id: string) => crises.entities[id].dirty)
        .switchMap((id: string) => this.dataService.addOrUpdateCrisis(crises.entities[id]))
        .map((responseCrisis: Crisis) => new crisis.UpdateCrisisSuccessAction(responseCrisis))
    );

}
