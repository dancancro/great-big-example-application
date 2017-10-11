import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiAlertService, JhiEventManager, JhiDataUtils } from 'ng-jhipster';

import { Author } from './author.model';
import { Article } from '../article/article.model';
import { AuthorPopupService } from './author-popup.service';
import { AuthorService } from './author.service';
import { ArticleService } from '../article/article.service';
import { User, UserService } from '../../shared';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-author-dialog',
    templateUrl: './author-dialog.component.html'
})
export class AuthorDialogComponent implements OnInit {

    author: Author;
    authorities: any[];
    isSaving: boolean;

    users: User[];

    authors: Author[];

    articles: Article[];

    constructor(
        public activeModal: NgbActiveModal,
        private dataUtils: JhiDataUtils,
        private alertService: JhiAlertService,
        private authorService: AuthorService,
        private articleService: ArticleService,
        private userService: UserService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.userService.query()
            .subscribe((res: ResponseWrapper) => { this.users = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.authorService.query()
            .subscribe((res: ResponseWrapper) => { this.authors = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.articleService.query()
            .subscribe((res: ResponseWrapper) => { this.articles = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, author, field, isImage) {
        if (event && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (isImage && !/^image\//.test(file.type)) {
                return;
            }
            this.dataUtils.toBase64(file, (base64Data) => {
                author[field] = base64Data;
                author[`${field}ContentType`] = file.type;
            });
        }
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.author.id !== undefined) {
            this.subscribeToSaveResponse(
                this.authorService.update(this.author), false);
        } else {
            this.subscribeToSaveResponse(
                this.authorService.create(this.author), true);
        }
    }

    private subscribeToSaveResponse(result: Observable<Author>, isCreated: boolean) {
        result.subscribe((res: Author) =>
            this.onSaveSuccess(res, isCreated), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Author, isCreated: boolean) {
        this.alertService.success(
            isCreated ? 'greatBigExampleApplicationApp.author.created'
                : 'greatBigExampleApplicationApp.author.updated',
            { param: result.id }, null);

        this.eventManager.broadcast({ name: 'authorListModification', content: 'OK' });
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

    trackUserById(index: number, item: User) {
        return item.id;
    }

    trackAuthorById(index: number, item: Author) {
        return item.id;
    }

    trackArticleById(index: number, item: Article) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-author-popup',
    template: ''
})
export class AuthorPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private authorPopupService: AuthorPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.modalRef = this.authorPopupService
                    .open(<Component>AuthorDialogComponent, params['id']);
            } else {
                this.modalRef = this.authorPopupService
                    .open(<Component>AuthorDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
