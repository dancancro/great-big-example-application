import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';

import { Counter, initialCounter } from './counter.model';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';
import { typeFor, slices } from '../util';
import { actions } from '../slice/slice.actions';
import * as SliceActions from '../slice/slice.actions';

@Injectable()
export class CounterEffects {
  @Effect({ dispatch: false })
  private reset$ = this.actions$
    .ofType(typeFor(slices.SESSION, actions.UPDATE))
    .map((action: Action) => {
      if (!action.payload.token) {
        return new SliceActions.Update(slices.COUNTER, [], initialCounter);
      } else {
        return empty()
      }
    });


  constructor(
    private store: Store<Counter>,
    private actions$: Actions,
    private dataService: DataService
  ) { }
}
