import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IClaim } from 'app/shared/model/claim.model';
import { ClaimService } from './claim.service';

@Component({
    selector: 'jhi-claim-delete-dialog',
    templateUrl: './claim-delete-dialog.component.html'
})
export class ClaimDeleteDialogComponent {
    claim: IClaim;

    constructor(private claimService: ClaimService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.claimService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'claimListModification',
                content: 'Deleted an claim'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-claim-delete-popup',
    template: ''
})
export class ClaimDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ claim }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(ClaimDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.claim = claim;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
