import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';

import { Comment } from './comment.model';
import { CommentPopupService } from './comment-popup.service';
import { CommentService } from './comment.service';

@Component({
    selector: 'jhi-comment-delete-dialog',
    templateUrl: './comment-delete-dialog.component.html'
})
export class CommentDeleteDialogComponent {

    comment: Comment;

    constructor(
        private commentService: CommentService,
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.commentService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'commentListModification',
                content: 'Deleted an comment'
            });
            this.activeModal.dismiss(true);
        });
        this.alertService.success('greatBigExampleApplicationApp.comment.deleted', { param: id }, null);
    }
}

@Component({
    selector: 'jhi-comment-delete-popup',
    template: ''
})
export class CommentDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private commentPopupService: CommentPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.commentPopupService
                .open(<Component>CommentDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
