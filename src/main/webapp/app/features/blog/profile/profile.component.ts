import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as SliceActions from '../../../core/store/slice/slice.actions';
import { slices } from '../../../core/store/util';
import * as fromRoot from '../../../core/store';
import { Profile } from '../../../core/store/profile/profile.model';
import { User } from '../../../core/store/user/user.model';

@Component({
    selector: 'profile-page',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {
    currentUserProfile: Profile;
    currentUserProfile$: Observable<Profile>;
    currentUserProfileSub: Subscription;
    profile$: Observable<Profile>;
    profile: Profile;
    isUser: boolean;
    constructor(
        private store: Store<fromRoot.RootState>,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.profile$ = this.store.select(fromRoot.getSelectedProfile);
        this.currentUserProfile$ = this.store.select(fromRoot.getCurrentProfile);
        this.currentUserProfileSub = Observable.combineLatest(this.currentUserProfile$, this.profile$).subscribe(
            ([currentUserProfile, profile]) => {
                this.currentUserProfile = currentUserProfile;
                this.profile = profile;
                this.isUser = (profile.username === currentUserProfile.username);
            }
        );
    }

    ngOnDestroy() {
        this.currentUserProfileSub && this.currentUserProfileSub.unsubscribe();
    }

}
