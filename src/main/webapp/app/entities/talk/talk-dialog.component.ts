import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';

import { Talk } from './talk.model';
import { TalkPopupService } from './talk-popup.service';
import { TalkService } from './talk.service';

@Component({
    selector: 'jhi-talk-dialog',
    templateUrl: './talk-dialog.component.html'
})
export class TalkDialogComponent implements OnInit {

    talk: Talk;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private dataUtils: JhiDataUtils,
        private talkService: TalkService,
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
        if (this.talk.id !== undefined) {
            this.subscribeToSaveResponse(
                this.talkService.update(this.talk));
        } else {
            this.subscribeToSaveResponse(
                this.talkService.create(this.talk));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Talk>>) {
        result.subscribe((res: HttpResponse<Talk>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Talk) {
        this.eventManager.broadcast({ name: 'talkListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-talk-popup',
    template: ''
})
export class TalkPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private talkPopupService: TalkPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.talkPopupService
                    .open(TalkDialogComponent as Component, params['id']);
            } else {
                this.talkPopupService
                    .open(TalkDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
