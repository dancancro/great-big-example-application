import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Injectable()
export class ClaimRebuttalPopupService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
        private router: Router,
        private claimRebuttalService: ClaimRebuttalService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.claimRebuttalService.find(id).subscribe((claimRebuttal) => {
                this.claimRebuttalModalRef(component, claimRebuttal);
            });
        } else {
            return this.claimRebuttalModalRef(component, new ClaimRebuttal());
        }
    }

    claimRebuttalModalRef(component: Component, claimRebuttal: ClaimRebuttal): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.claimRebuttal = claimRebuttal;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
