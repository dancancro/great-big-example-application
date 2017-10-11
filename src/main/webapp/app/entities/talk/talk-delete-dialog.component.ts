import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Talk } from './talk.model';
import { TalkPopupService } from './talk-popup.service';
import { TalkService } from './talk.service';

@Component({
    selector: 'jhi-talk-delete-dialog',
    templateUrl: './talk-delete-dialog.component.html'
})
export class TalkDeleteDialogComponent {

    talk: Talk;

    constructor(
        private talkService: TalkService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.talkService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'talkListModification',
                content: 'Deleted an talk'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-talk-delete-popup',
    template: ''
})
export class TalkDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private talkPopupService: TalkPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.talkPopupService
                .open(<Component>TalkDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
