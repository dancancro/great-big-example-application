import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Message } from './message.model';
import { MessagePopupService } from './message-popup.service';
import { MessageService } from './message.service';

@Component({
    selector: 'jhi-message-delete-dialog',
    templateUrl: './message-delete-dialog.component.html'
})
export class MessageDeleteDialogComponent {

    message: Message;

    constructor(
        private messageService: MessageService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.messageService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'messageListModification',
                content: 'Deleted an message'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-message-delete-popup',
    template: ''
})
export class MessageDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private messagePopupService: MessagePopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.messagePopupService
                .open(<Component>MessageDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
