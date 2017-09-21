import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Rebuttal, initialRebuttal } from './rebuttal.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';

@Injectable()
export class RebuttalEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.REBUTTAL, this.dataService, this.store, initialRebuttal);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}
