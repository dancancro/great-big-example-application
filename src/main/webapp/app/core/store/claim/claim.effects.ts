import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { slices } from '../util';
import { initialClaim } from './claim.model';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';

@Injectable()
export class ClaimEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.CLAIM, this.dataService, this.store, initialClaim);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}
