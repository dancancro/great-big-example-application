import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Rebuttal } from './rebuttal.model';
import { RebuttalService } from './rebuttal.service';

@Injectable()
export class RebuttalPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private rebuttalService: RebuttalService

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
                this.rebuttalService.find(id)
                    .subscribe((rebuttalResponse: HttpResponse<Rebuttal>) => {
                        const rebuttal: Rebuttal = rebuttalResponse.body;
                        rebuttal.date = this.datePipe
                            .transform(rebuttal.date, 'yyyy-MM-ddTHH:mm:ss');
                        rebuttal.expires = this.datePipe
                            .transform(rebuttal.expires, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.rebuttalModalRef(component, rebuttal);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.rebuttalModalRef(component, new Rebuttal());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    rebuttalModalRef(component: Component, rebuttal: Rebuttal): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.rebuttal = rebuttal;
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
