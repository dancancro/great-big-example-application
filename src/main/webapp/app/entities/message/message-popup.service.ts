import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Injectable()
export class MessagePopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private messageService: MessageService

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
                this.messageService.find(id)
                    .subscribe((messageResponse: HttpResponse<Message>) => {
                        const message: Message = messageResponse.body;
                        message.createdAt = this.datePipe
                            .transform(message.createdAt, 'yyyy-MM-ddTHH:mm:ss');
                        message.updatedAt = this.datePipe
                            .transform(message.updatedAt, 'yyyy-MM-ddTHH:mm:ss');
                        this.ngbModalRef = this.messageModalRef(component, message);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.messageModalRef(component, new Message());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    messageModalRef(component: Component, message: Message): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.message = message;
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
