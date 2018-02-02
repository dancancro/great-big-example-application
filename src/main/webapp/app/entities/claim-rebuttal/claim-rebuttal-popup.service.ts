import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Injectable()
export class ClaimRebuttalPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private claimRebuttalService: ClaimRebuttalService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.claimRebuttalService.find(id)
                    .subscribe((claimRebuttalResponse: HttpResponse<ClaimRebuttal>) => {
                        const claimRebuttal: ClaimRebuttal = claimRebuttalResponse.body;
                        this.ngbModalRef = this.claimRebuttalModalRef(component, claimRebuttal);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.claimRebuttalModalRef(component, new ClaimRebuttal());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    claimRebuttalModalRef(component: Component, claimRebuttal: ClaimRebuttal): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.claimRebuttal = claimRebuttal;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
