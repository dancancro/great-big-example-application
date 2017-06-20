import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Rebuttal } from './rebuttal.model';
import { RebuttalService } from './rebuttal.service';

@Injectable()
export class RebuttalPopupService {
    private isOpen = false;
    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private rebuttalService: RebuttalService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.rebuttalService.find(id).subscribe((rebuttal) => {
                rebuttal.date = this.datePipe
                    .transform(rebuttal.date, 'yyyy-MM-ddThh:mm');
                rebuttal.expires = this.datePipe
                    .transform(rebuttal.expires, 'yyyy-MM-ddThh:mm');
                this.rebuttalModalRef(component, rebuttal);
            });
        } else {
            return this.rebuttalModalRef(component, new Rebuttal());
        }
    }

    rebuttalModalRef(component: Component, rebuttal: Rebuttal): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.rebuttal = rebuttal;
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
