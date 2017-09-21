import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../../../core/store';
import { Profile } from '../../../../core/store/profile/profile.model';
import { User } from '../../../../core/store/user/user.model';

@Component({
    selector: 'jhi-layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    currentUserProfile$: Observable<Profile>;
    currentUserProfileSub: Subscription;
    currentUserProfile: Profile;

    constructor(
        private store: Store<fromRoot.RootState>
    ) { }

    ngOnInit() {
        this.currentUserProfile$ = this.store.select(fromRoot.getCurrentProfile);
        this.currentUserProfileSub = this.currentUserProfile$.subscribe(
            (profile) => {
                this.currentUserProfile = profile;
            }
        );
    }

    ngOnDestroy() {
        this.currentUserProfileSub && this.currentUserProfileSub.unsubscribe();
    }
}
