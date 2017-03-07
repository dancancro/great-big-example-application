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

import * as session from '../session/session.actions';
import { Session } from '../session/session.model';
import { DataService } from '../../services/data.service';

@Injectable()
export class SessionEffects {
  constructor(private actions$: Actions,
    private dataService: DataService) { }

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(session.ActionTypes.LOGIN_USER)
    .switchMap((action: Action, index: number) =>
      this.dataService.login(action.payload)
        .map((loginResponse: any) =>
          new session.LoginUserSuccessAction(loginResponse.meta))
        .catch(error => of(new session.LoginUserFailAction(error)))
    );
}