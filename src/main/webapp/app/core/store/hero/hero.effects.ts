import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Hero, initialHero } from './hero.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';

@Injectable()
export class HeroEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.HERO, this.dataService, this.store, initialHero);
    @Effect()
    private updateToRemote$ = entityFunctions.updateToRemote$(this.actions$, slices.HERO, this.dataService, this.store, initialHero);
    @Effect()
    private deleteFromRemote$ = entityFunctions.deleteFromRemote$(this.actions$, slices.HERO, this.dataService, this.store);
    @Effect()
    private addToRemote$ = entityFunctions.addToRemote$(this.actions$, slices.HERO, this.dataService, this.store, initialHero);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}
