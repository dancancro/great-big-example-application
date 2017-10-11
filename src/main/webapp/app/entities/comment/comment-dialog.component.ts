import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { Comment } from './comment.model';
import { CommentPopupService } from './comment-popup.service';
import { CommentService } from './comment.service';
import { Article, ArticleService } from '../article';
import { Author, AuthorService } from '../author';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-comment-dialog',
    templateUrl: './comment-dialog.component.html'
})
export class CommentDialogComponent implements OnInit {

    comment: Comment;
    authorities: any[];
    isSaving: boolean;

    articles: Article[];

    authors: Author[];

    constructor(
        public activeModal: NgbActiveModal,
        private dataUtils: JhiDataUtils,
        private alertService: JhiAlertService,
        private commentService: CommentService,
        private articleService: ArticleService,
        private authorService: AuthorService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.articleService.query()
            .subscribe((res: ResponseWrapper) => { this.articles = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.authorService.query()
            .subscribe((res: ResponseWrapper) => { this.authors = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, comment, field, isImage) {
        if (event && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (isImage && !/^image\//.test(file.type)) {
                return;
            }
            this.dataUtils.toBase64(file, (base64Data) => {
                comment[field] = base64Data;
                comment[`${field}ContentType`] = file.type;
            });
        }
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.comment.id !== undefined) {
            this.subscribeToSaveResponse(
                this.commentService.update(this.comment), false);
        } else {
            this.subscribeToSaveResponse(
                this.commentService.create(this.comment), true);
        }
    }

    private subscribeToSaveResponse(result: Observable<Comment>, isCreated: boolean) {
        result.subscribe((res: Comment) =>
            this.onSaveSuccess(res, isCreated), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Comment, isCreated: boolean) {
        this.alertService.success(
            isCreated ? 'greatBigExampleApplicationApp.comment.created'
                : 'greatBigExampleApplicationApp.comment.updated',
            { param: result.id }, null);

        this.eventManager.broadcast({ name: 'commentListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackArticleById(index: number, item: Article) {
        return item.id;
    }

    trackAuthorById(index: number, item: Author) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-comment-popup',
    template: ''
})
export class CommentPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private commentPopupService: CommentPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.modalRef = this.commentPopupService
                    .open(<Component>CommentDialogComponent, params['id']);
            } else {
                this.modalRef = this.commentPopupService
                    .open(<Component>CommentDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
