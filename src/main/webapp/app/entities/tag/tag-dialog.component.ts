import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Tag } from './tag.model';
import { TagPopupService } from './tag-popup.service';
import { TagService } from './tag.service';
import { Article, ArticleService } from '../article';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tag-dialog',
    templateUrl: './tag-dialog.component.html'
})
export class TagDialogComponent implements OnInit {

    tag: Tag;
    authorities: any[];
    isSaving: boolean;

    articles: Article[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private tagService: TagService,
        private articleService: ArticleService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.articleService.query()
            .subscribe((res: ResponseWrapper) => { this.articles = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.tag.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tagService.update(this.tag));
        } else {
            this.subscribeToSaveResponse(
                this.tagService.create(this.tag));
        }
    }

    private subscribeToSaveResponse(result: Observable<Tag>) {
        result.subscribe((res: Tag) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Tag) {
        this.eventManager.broadcast({ name: 'tagListModification', content: 'OK' });
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
    selector: 'jhi-tag-popup',
    template: ''
})
export class TagPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tagPopupService: TagPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.modalRef = this.tagPopupService
                    .open(<Component>TagDialogComponent, params['id']);
            } else {
                this.modalRef = this.tagPopupService
                    .open(<Component>TagDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
