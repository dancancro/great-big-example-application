import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Crisis } from './crisis.model';
import { CrisisPopupService } from './crisis-popup.service';
import { CrisisService } from './crisis.service';

@Component({
    selector: 'jhi-crisis-delete-dialog',
    templateUrl: './crisis-delete-dialog.component.html'
})
export class CrisisDeleteDialogComponent {

    crisis: Crisis;

    constructor(
        private crisisService: CrisisService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.crisisService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'crisisListModification',
                content: 'Deleted an crisis'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-crisis-delete-popup',
    template: ''
})
export class CrisisDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private crisisPopupService: CrisisPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.crisisPopupService
                .open(<Component>CrisisDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
