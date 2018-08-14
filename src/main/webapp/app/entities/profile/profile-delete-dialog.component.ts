import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Profile } from './profile.model';
import { ProfilePopupService } from './profile-popup.service';
import { ProfileService } from './profile.service';

@Component({
    selector: 'jhi-profile-delete-dialog',
    templateUrl: './profile-delete-dialog.component.html'
})
export class ProfileDeleteDialogComponent {

    profile: Profile;

    constructor(
        private profileService: ProfileService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.profileService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'profileListModification',
                content: 'Deleted an profile'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-profile-delete-popup',
    template: ''
})
export class ProfileDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private profilePopupService: ProfilePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.profilePopupService
                .open(ProfileDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
