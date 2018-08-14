import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IRebuttal } from 'app/shared/model/rebuttal.model';
import { RebuttalService } from './rebuttal.service';

@Component({
    selector: 'jhi-rebuttal-delete-dialog',
    templateUrl: './rebuttal-delete-dialog.component.html'
})
export class RebuttalDeleteDialogComponent {
    rebuttal: IRebuttal;

    constructor(private rebuttalService: RebuttalService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.rebuttalService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'rebuttalListModification',
                content: 'Deleted an rebuttal'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-rebuttal-delete-popup',
    template: ''
})
export class RebuttalDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ rebuttal }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(RebuttalDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.rebuttal = rebuttal;
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
