import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { slices, PayloadAction, handleNavigation } from '../util';
import { Actions, Effect } from '@ngrx/effects';

import { RootState } from '../';
import { initialClaimRebuttal } from './claim-rebuttal.model';
import * as EntityActions from '../entity/entity.actions';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';

@Injectable()
export class ClaimRebuttalEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.CLAIM_REBUTTAL, this.dataService, this.store, initialClaimRebuttal, undefined, undefined, false);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}
