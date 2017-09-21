import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Author } from './author.model';
import { AuthorService } from './author.service';

@Injectable()
export class AuthorPopupService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
        private router: Router,
        private authorService: AuthorService

    ) { }

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.authorService.find(id).subscribe((author) => {
                this.authorModalRef(component, author);
            });
        } else {
            return this.authorModalRef(component, new Author());
        }
    }

    authorModalRef(component: Component, author: Author): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.author = author;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
