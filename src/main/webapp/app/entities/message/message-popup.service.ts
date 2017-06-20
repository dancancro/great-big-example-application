import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Injectable()
export class MessagePopupService {
    private isOpen = false;
    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private messageService: MessageService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.messageService.find(id).subscribe((message) => {
                message.createdAt = this.datePipe
                    .transform(message.createdAt, 'yyyy-MM-ddThh:mm');
                message.updatedAt = this.datePipe
                    .transform(message.updatedAt, 'yyyy-MM-ddThh:mm');
                this.messageModalRef(component, message);
            });
        } else {
            return this.messageModalRef(component, new Message());
        }
    }

    messageModalRef(component: Component, message: Message): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.message = message;
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
