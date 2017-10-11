import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Author } from './author.model';
import { AuthorPopupService } from './author-popup.service';
import { AuthorService } from './author.service';

@Component({
    selector: 'jhi-author-delete-dialog',
    templateUrl: './author-delete-dialog.component.html'
})
export class AuthorDeleteDialogComponent {

    author: Author;

    constructor(
        private authorService: AuthorService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.authorService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'authorListModification',
                content: 'Deleted an author'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-author-delete-popup',
    template: ''
})
export class AuthorDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private authorPopupService: AuthorPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.authorPopupService
                .open(<Component>AuthorDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
