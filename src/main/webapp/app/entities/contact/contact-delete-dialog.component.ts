import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Contact } from './contact.model';
import { ContactPopupService } from './contact-popup.service';
import { ContactService } from './contact.service';

@Component({
    selector: 'jhi-contact-delete-dialog',
    templateUrl: './contact-delete-dialog.component.html'
})
export class ContactDeleteDialogComponent {

    contact: Contact;

    constructor(
        private contactService: ContactService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.contactService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'contactListModification',
                content: 'Deleted an contact'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-contact-delete-popup',
    template: ''
})
export class ContactDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private contactPopupService: ContactPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.contactPopupService
                .open(<Component>ContactDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
