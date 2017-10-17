import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { slices, PayloadAction, handleNavigation } from '../util';
import { Rebuttal, initialRebuttal } from './rebuttal.model';
import * as EntityActions from '../entity/entity.actions';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';

@Injectable()
export class RebuttalEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.REBUTTAL, this.dataService, this.store, initialRebuttal, undefined, undefined, false);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}
