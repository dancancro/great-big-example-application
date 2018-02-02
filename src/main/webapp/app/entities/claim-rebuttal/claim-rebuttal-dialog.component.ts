import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalPopupService } from './claim-rebuttal-popup.service';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Component({
    selector: 'jhi-claim-rebuttal-dialog',
    templateUrl: './claim-rebuttal-dialog.component.html'
})
export class ClaimRebuttalDialogComponent implements OnInit {

    claimRebuttal: ClaimRebuttal;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private claimRebuttalService: ClaimRebuttalService,
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
        if (this.claimRebuttal.id !== undefined) {
            this.subscribeToSaveResponse(
                this.claimRebuttalService.update(this.claimRebuttal));
        } else {
            this.subscribeToSaveResponse(
                this.claimRebuttalService.create(this.claimRebuttal));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ClaimRebuttal>>) {
        result.subscribe((res: HttpResponse<ClaimRebuttal>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: ClaimRebuttal) {
        this.eventManager.broadcast({ name: 'claimRebuttalListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-claim-rebuttal-popup',
    template: ''
})
export class ClaimRebuttalPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private claimRebuttalPopupService: ClaimRebuttalPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.claimRebuttalPopupService
                    .open(ClaimRebuttalDialogComponent as Component, params['id']);
            } else {
                this.claimRebuttalPopupService
                    .open(ClaimRebuttalDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
