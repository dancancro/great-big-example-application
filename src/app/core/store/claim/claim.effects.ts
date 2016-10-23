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

import * as claims from '../claim/claim.actions';
import { Claim } from '../claim/claim.model';
import { DataService } from '../data.service';

@Injectable()
export class ClaimEffects {
  constructor(private actions$: Actions,
              private dataService: DataService) { }

  @Effect()
  loadData$: Observable<Action> = this.actions$
    .ofType(claims.ActionTypes.LOAD)
    .startWith(new claims.LoadAction())
    .switchMap(() => 
      this.dataService.getClaims()
      .map((claimsResponse: Claim[]) => new claims.LoadSuccessAction(claimsResponse))
      .catch(error => of(new claims.LoadFailAction(error)))
    );
}