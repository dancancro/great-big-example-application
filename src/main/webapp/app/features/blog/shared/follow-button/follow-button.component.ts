import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../../core/store';
import { Profile } from '../../../../core/store/profile/profile.model';
import { Principal } from '../../../../shared/auth/principal.service';
import { slices } from '../../../../core/store/util';
import * as EntityActions from '../../../../core/store/entity/entity.actions';

@Component({
    selector: 'jhi-follow-button',
    templateUrl: './follow-button.component.html'
})
export class FollowButtonComponent {
    constructor(
        private store: Store<fromRoot.RootState>,
        private router: Router,
        private principal: Principal
    ) { }

    @Input() profile: Profile;

    toggleFollowing() {

        // Not authenticated? Push to login screen
        if (!this.principal.isAuthenticated()) {
            this.router.navigateByUrl('/');
            return;
        }

        // TODO: it would be better to pass this.profile.id and hide the fact that username is used for profile.id
        this.store.dispatch(new EntityActions.Patch(slices.PROFILE, { id: this.profile.username, following: !this.profile.following }));

    }
}
