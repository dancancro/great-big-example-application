import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Crisis } from './crisis.model';
import { CrisisPopupService } from './crisis-popup.service';
import { CrisisService } from './crisis.service';

@Component({
    selector: 'jhi-crisis-dialog',
    templateUrl: './crisis-dialog.component.html'
})
export class CrisisDialogComponent implements OnInit {

    crisis: Crisis;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private crisisService: CrisisService,
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
        if (this.crisis.id !== undefined) {
            this.subscribeToSaveResponse(
                this.crisisService.update(this.crisis));
        } else {
            this.subscribeToSaveResponse(
                this.crisisService.create(this.crisis));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Crisis>>) {
        result.subscribe((res: HttpResponse<Crisis>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Crisis) {
        this.eventManager.broadcast({ name: 'crisisListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-crisis-popup',
    template: ''
})
export class CrisisPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private crisisPopupService: CrisisPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.crisisPopupService
                    .open(CrisisDialogComponent as Component, params['id']);
            } else {
                this.crisisPopupService
                    .open(CrisisDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
