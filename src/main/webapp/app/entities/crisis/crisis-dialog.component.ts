import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Crisis } from './crisis.model';
import { CrisisPopupService } from './crisis-popup.service';
import { CrisisService } from './crisis.service';

@Component({
    selector: 'jhi-crisis-dialog',
    templateUrl: './crisis-dialog.component.html'
})
export class CrisisDialogComponent implements OnInit {

    crisis: Crisis;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private crisisService: CrisisService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['crisis']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.crisis.id !== undefined) {
            this.crisisService.update(this.crisis)
                .subscribe((res: Crisis) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
        } else {
            this.crisisService.create(this.crisis)
                .subscribe((res: Crisis) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
        }
    }

    private onSaveSuccess(result: Crisis) {
        this.eventManager.broadcast({ name: 'crisisListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-crisis-popup',
    template: ''
})
export class CrisisPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private crisisPopupService: CrisisPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.crisisPopupService
                    .open(CrisisDialogComponent, params['id']);
            } else {
                this.modalRef = this.crisisPopupService
                    .open(CrisisDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
