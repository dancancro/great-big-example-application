import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAuthor } from 'app/shared/model/author.model';
import { AuthorService } from './author.service';

@Component({
    selector: 'jhi-author-delete-dialog',
    templateUrl: './author-delete-dialog.component.html'
})
export class AuthorDeleteDialogComponent {
    author: IAuthor;

    constructor(private authorService: AuthorService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.authorService.delete(id).subscribe(response => {
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
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ author }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(AuthorDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.author = author;
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
