import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { slices, PayloadAction, handleNavigation } from '../util';
import { initialClaim } from './claim.model';
import * as EntityActions from '../entity/entity.actions';
import * as SliceActions from '../slice/slice.actions';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';

@Injectable()
export class ClaimEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.CLAIM, this.dataService, this.store, initialClaim, undefined, undefined, false);

    @Effect()
    setSearch$ = handleNavigation(this.store, this.actions$, ['/features/bernie', '/features/bernie/:claimId'], (r: ActivatedRouteSnapshot, state: RootState) => {
        const term = r.queryParamMap.get('q');
        const claimId = r.firstChild.firstChild.params.claimId;
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['berniePage', 'bernieSearchTerm'], term || ''));

        if (claimId !== undefined) {
            this.store.dispatch(new EntityActions.Select(slices.CLAIM, { id: claimId }));
        }

        return of();
    });

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}
