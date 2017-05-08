import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { RebuttalPopupService } from './rebuttal-popup.service';
import { RebuttalService } from './rebuttal.service';

@Component({
    selector: 'jhi-rebuttal-dialog',
    templateUrl: './rebuttal-dialog.component.html'
})
export class RebuttalDialogComponent implements OnInit {

    rebuttal: Rebuttal;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private rebuttalService: RebuttalService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['rebuttal']);
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
        if (this.rebuttal.id !== undefined) {
            this.rebuttalService.update(this.rebuttal)
                .subscribe((res: Rebuttal) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
        } else {
            this.rebuttalService.create(this.rebuttal)
                .subscribe((res: Rebuttal) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
        }
    }

    private onSaveSuccess(result: Rebuttal) {
        this.eventManager.broadcast({ name: 'rebuttalListModification', content: 'OK'});
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
    selector: 'jhi-rebuttal-popup',
    template: ''
})
export class RebuttalPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private rebuttalPopupService: RebuttalPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.rebuttalPopupService
                    .open(RebuttalDialogComponent, params['id']);
            } else {
                this.modalRef = this.rebuttalPopupService
                    .open(RebuttalDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
