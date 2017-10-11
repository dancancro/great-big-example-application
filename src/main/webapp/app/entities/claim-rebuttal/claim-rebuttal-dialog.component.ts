import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalPopupService } from './claim-rebuttal-popup.service';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Component({
    selector: 'jhi-claim-rebuttal-dialog',
    templateUrl: './claim-rebuttal-dialog.component.html'
})
export class ClaimRebuttalDialogComponent implements OnInit {

    claimRebuttal: ClaimRebuttal;
    authorities: any[];
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private claimRebuttalService: ClaimRebuttalService,
        private eventManager: JhiEventManager
    ) {
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
        if (this.claimRebuttal.id !== undefined) {
            this.subscribeToSaveResponse(
                this.claimRebuttalService.update(this.claimRebuttal));
        } else {
            this.subscribeToSaveResponse(
                this.claimRebuttalService.create(this.claimRebuttal));
        }
    }

    private subscribeToSaveResponse(result: Observable<ClaimRebuttal>) {
        result.subscribe((res: ClaimRebuttal) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: ClaimRebuttal) {
        this.eventManager.broadcast({ name: 'claimRebuttalListModification', content: 'OK' });
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
    selector: 'jhi-claim-rebuttal-popup',
    template: ''
})
export class ClaimRebuttalPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private claimRebuttalPopupService: ClaimRebuttalPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.modalRef = this.claimRebuttalPopupService
                    .open(<Component>ClaimRebuttalDialogComponent, params['id']);
            } else {
                this.modalRef = this.claimRebuttalPopupService
                    .open(<Component>ClaimRebuttalDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
