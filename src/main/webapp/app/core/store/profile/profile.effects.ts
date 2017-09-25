import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

import { Profile, initialProfile } from './profile.model';
import * as entityFunctions from '../entity/entity.functions';
import { slices } from '../util';
import { EntityAction } from '../entity/entity.actions';
import * as EntityActions from '../entity/entity.actions';
import * as SliceActions from '../slice/slice.actions';
import { RESTService } from '../../services/rest.service';
import { RootState } from '../';
import { PayloadAction, handleNavigation } from '../util';

@Injectable()
export class ProfileEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.PROFILE, this.dataService, this.store, initialProfile);

    @Effect()
    private updateToRemote$ = entityFunctions.updateToRemote$(this.actions$, slices.PROFILE, this.dataService, this.store, initialProfile);

    @Effect()
    navigateToProfile$ = handleNavigation(this.store, this.actions$, '/features/blog/profile/:username', (r: ActivatedRouteSnapshot, state: RootState) => {
        const username = r.firstChild.firstChild.firstChild.firstChild.paramMap.get('username');
        // this.store.dispatch(new EntityActions.Select(slices.PROFILE, { id: username }));
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['blogPage'], { currentPage: 1, type: null, filters: { favorited: null, tag: null, author: username } }));
        return of();
    });

    @Effect()
    navigateToProfileFavorites$ = handleNavigation(this.store, this.actions$, '/features/blog/profile/:username/favorites', (r: ActivatedRouteSnapshot, state: RootState) => {
        const username = r.firstChild.firstChild.firstChild.firstChild.paramMap.get('username');
        // this.store.dispatch(new EntityActions.Select(slices.PROFILE, { id: username }));
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['blogPage'], { currentPage: 1, type: null, filters: { favorited: username, tag: null, author: null } }));
        return of();
    });

    constructor(
        private store: Store<RootState>,
        private actions$: Actions<EntityAction<Profile>>,
        private router: Router,
        private dataService: RESTService
    ) { }
}
