import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Crisis, initialCrisis } from './crisis.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';
import { EntityAction } from '../entity/entity.actions';

@Injectable()
export class CrisisEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.CRISIS, this.dataService, this.store, initialCrisis);
    @Effect()
    private updateToRemote$ = entityFunctions.updateToRemote$(this.actions$, slices.CRISIS, this.dataService, this.store, initialCrisis);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions<EntityAction<Crisis>>,
        private dataService: RESTService
    ) { }
}
