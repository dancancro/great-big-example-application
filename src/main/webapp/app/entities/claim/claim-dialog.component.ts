import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Claim } from './claim.model';
import { ClaimPopupService } from './claim-popup.service';
import { ClaimService } from './claim.service';

@Component({
    selector: 'jhi-claim-dialog',
    templateUrl: './claim-dialog.component.html'
})
export class ClaimDialogComponent implements OnInit {

    claim: Claim;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private claimService: ClaimService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
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

    private subscribeToSaveResponse(result: Observable<HttpResponse<Claim>>) {
        result.subscribe((res: HttpResponse<Claim>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Claim) {
        this.eventManager.broadcast({ name: 'claimListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-claim-popup',
    template: ''
})
export class ClaimPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private claimPopupService: ClaimPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.claimPopupService
                    .open(ClaimDialogComponent as Component, params['id']);
            } else {
                this.claimPopupService
                    .open(ClaimDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
