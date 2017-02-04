import { Injectable } from '@angular/core';
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

import { Hero } from './hero.model';
import { DataService } from '../data.service';
import * as hero from './hero.actions';

@Injectable()
export class HeroEffects {
  constructor(private store: Store<Hero>,
    private dataService: DataService,
    private action$: Actions) { }

  @Effect()
  load$ = this.action$
    .ofType(hero.ActionTypes.LOAD)
    .startWith(new hero.LoadAction())
    .switchMap(() =>
      this.dataService.getHeroes()
        .mergeMap(fetchedHeros => Observable.from(fetchedHeros))
        .map((fetchedHero: Hero) => new hero.LoadSuccessAction(fetchedHero))  // one action per hero
        .catch(() => Observable.of(new hero.UpdateHeroFailAction()))
    );

  @Effect()
  update$ = this.action$
    .ofType(hero.ActionTypes.UPDATE_HERO,
    hero.ActionTypes.ADD_HERO)
    .withLatestFrom(this.store.select('heros'))
    .switchMap(([{}, heros]) =>
      Observable   // first element is action, but it isn't used
        .from((<any>heros).ids)
        .filter((id: string) => (<any>heros).entities[id].dirty)
        .switchMap((id: string) => this.dataService.addOrUpdateHero((<any>heros).entities[id]))
        .map((responseHero: Hero) => new hero.UpdateHeroSuccessAction(responseHero))
    );

}
