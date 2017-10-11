import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Claim } from './claim.model';
import { ClaimPopupService } from './claim-popup.service';
import { ClaimService } from './claim.service';

@Component({
    selector: 'jhi-claim-dialog',
    templateUrl: './claim-dialog.component.html'
})
export class ClaimDialogComponent implements OnInit {

    claim: Claim;
    authorities: any[];
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private claimService: ClaimService,
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
        if (this.claim.id !== undefined) {
            this.subscribeToSaveResponse(
                this.claimService.update(this.claim));
        } else {
            this.subscribeToSaveResponse(
                this.claimService.create(this.claim));
        }
    }

    private subscribeToSaveResponse(result: Observable<Claim>) {
        result.subscribe((res: Claim) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Claim) {
        this.eventManager.broadcast({ name: 'claimListModification', content: 'OK' });
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
    selector: 'jhi-claim-popup',
    template: ''
})
export class ClaimPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private claimPopupService: ClaimPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.modalRef = this.claimPopupService
                    .open(<Component>ClaimDialogComponent, params['id']);
            } else {
                this.modalRef = this.claimPopupService
                    .open(<Component>ClaimDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
