import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { Author } from './author.model';
import { AuthorPopupService } from './author-popup.service';
import { AuthorService } from './author.service';
import { User, UserService } from '../../shared';
import { Article, ArticleService } from '../article';

@Component({
    selector: 'jhi-author-dialog',
    templateUrl: './author-dialog.component.html'
})
export class AuthorDialogComponent implements OnInit {

    author: Author;
    isSaving: boolean;

    users: User[];

    authors: Author[];

    articles: Article[];

    constructor(
        public activeModal: NgbActiveModal,
        private dataUtils: JhiDataUtils,
        private jhiAlertService: JhiAlertService,
        private authorService: AuthorService,
        private userService: UserService,
        private articleService: ArticleService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.userService.query()
            .subscribe((res: HttpResponse<User[]>) => { this.users = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
        this.authorService.query()
            .subscribe((res: HttpResponse<Author[]>) => { this.authors = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
        this.articleService.query()
            .subscribe((res: HttpResponse<Article[]>) => { this.articles = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.author.id !== undefined) {
            this.subscribeToSaveResponse(
                this.authorService.update(this.author));
        } else {
            this.subscribeToSaveResponse(
                this.authorService.create(this.author));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Author>>) {
        result.subscribe((res: HttpResponse<Author>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Author) {
        this.eventManager.broadcast({ name: 'authorListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
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

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private authorPopupService: AuthorPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.authorPopupService
                    .open(AuthorDialogComponent as Component, params['id']);
            } else {
                this.authorPopupService
                    .open(AuthorDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
