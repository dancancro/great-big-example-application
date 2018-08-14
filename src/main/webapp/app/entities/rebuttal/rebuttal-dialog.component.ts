import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { RebuttalPopupService } from './rebuttal-popup.service';
import { RebuttalService } from './rebuttal.service';

@Component({
    selector: 'jhi-rebuttal-dialog',
    templateUrl: './rebuttal-dialog.component.html'
})
export class RebuttalDialogComponent implements OnInit {

    rebuttal: Rebuttal;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private rebuttalService: RebuttalService,
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
        if (this.rebuttal.id !== undefined) {
            this.subscribeToSaveResponse(
                this.rebuttalService.update(this.rebuttal));
        } else {
            this.subscribeToSaveResponse(
                this.rebuttalService.create(this.rebuttal));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Rebuttal>>) {
        result.subscribe((res: HttpResponse<Rebuttal>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Rebuttal) {
        this.eventManager.broadcast({ name: 'rebuttalListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-rebuttal-popup',
    template: ''
})
export class RebuttalPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private rebuttalPopupService: RebuttalPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.rebuttalPopupService
                    .open(RebuttalDialogComponent as Component, params['id']);
            } else {
                this.rebuttalPopupService
                    .open(RebuttalDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
