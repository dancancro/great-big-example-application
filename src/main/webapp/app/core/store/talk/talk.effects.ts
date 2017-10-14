import { Params, ActivatedRouteSnapshot } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { WatchService } from '../../../features/talks/services/watch.service';
import { Filters } from '../../../features/talks/talks.layout';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { Talk, initialTalk } from './talk.model';
import { RootState } from '../';
import { slices, PayloadAction, handleNavigation } from '../util';
import * as EntityActions from '../entity/entity.actions';
import { typeFor } from '../util';
import { actions } from '../entity/entity.actions';

@Injectable()
export class TalkEffects {
  @Effect()
  navigateToTalks$ = handleNavigation(this.store, this.actions$, '/features/talks', (r: ActivatedRouteSnapshot, state: RootState) => {
    const filters = createFilters(r.firstChild.firstChild.params);
    return this.dataService.getEntities(slices.TALK, { query: { speaker: filters.speaker, title: filters.title, minRating: '' + filters.minRating } }, state)
      .map((fetchedEntities) => new EntityActions.AsyncSuccess(slices.TALK, fetchedEntities));
  });

  @Effect()
  navigateToTalk$ = handleNavigation(this.store, this.actions$, '/features/talks/talk/:id', (r: ActivatedRouteSnapshot, state: RootState) => {
    const id = r.firstChild.firstChild.firstChild.paramMap.get('id');
    this.store.dispatch(new EntityActions.Select(slices.TALK, { id }));
    return of();
  });

  @Effect()
  selectTalk$ = entityFunctions.select$(this.actions$, slices.TALK, this.dataService, this.store, initialTalk);

  @Effect() rateTalk$ = this.actions$.ofType(typeFor(slices.TALK, actions.PATCH))
    .withLatestFrom(this.store)
    .switchMap(([a, state]) => {
      return this.dataService.update(slices.TALK, { id: a.payload.id, yourRating: a.payload.rating }, state, this.store)
        .switchMap(() => of())
        .catch((e) => {
          console.log('Error', e);
          return of(new EntityActions.PatchFail(slices.TALK, { id: a.payload.talkId, rating: null })
          );
        });
    });

  constructor(
    private store: Store<RootState>,  // Other effects are Store<Thing>
    private actions$: Actions<PayloadAction>,
    private dataService: RESTService,
    private watch: WatchService
  ) { }
}

function createFilters(p: Params): Filters {
  return { speaker: p['speaker'] || null, title: p['title'] || null, minRating: p['minRating'] ? +p['minRating'] : 0 };
}
