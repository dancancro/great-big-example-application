import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalPopupService } from './claim-rebuttal-popup.service';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Component({
    selector: 'jhi-claim-rebuttal-delete-dialog',
    templateUrl: './claim-rebuttal-delete-dialog.component.html'
})
export class ClaimRebuttalDeleteDialogComponent {

    claimRebuttal: ClaimRebuttal;

    constructor(
        private claimRebuttalService: ClaimRebuttalService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.claimRebuttalService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'claimRebuttalListModification',
                content: 'Deleted an claimRebuttal'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-claim-rebuttal-delete-popup',
    template: './claim-rebuttal-delete-dialog.component.html'
})
export class ClaimRebuttalDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private claimRebuttalPopupService: ClaimRebuttalPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.claimRebuttalPopupService
                .open(<Component>ClaimRebuttalDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
