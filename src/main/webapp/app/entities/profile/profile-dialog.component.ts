import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';

import { Profile } from './profile.model';
import { ProfilePopupService } from './profile-popup.service';
import { ProfileService } from './profile.service';

@Component({
    selector: 'jhi-profile-dialog',
    templateUrl: './profile-dialog.component.html'
})
export class ProfileDialogComponent implements OnInit {

    profile: Profile;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private dataUtils: JhiDataUtils,
        private profileService: ProfileService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.profile.id !== undefined) {
            this.subscribeToSaveResponse(
                this.profileService.update(this.profile));
        } else {
            this.subscribeToSaveResponse(
                this.profileService.create(this.profile));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Profile>>) {
        result.subscribe((res: HttpResponse<Profile>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Profile) {
        this.eventManager.broadcast({ name: 'profileListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-profile-popup',
    template: ''
})
export class ProfilePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private profilePopupService: ProfilePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.profilePopupService
                    .open(ProfileDialogComponent as Component, params['id']);
            } else {
                this.profilePopupService
                    .open(ProfileDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
