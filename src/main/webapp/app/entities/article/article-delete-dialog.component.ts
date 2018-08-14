import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Article } from './article.model';
import { ArticlePopupService } from './article-popup.service';
import { ArticleService } from './article.service';

@Component({
    selector: 'jhi-article-delete-dialog',
    templateUrl: './article-delete-dialog.component.html'
})
export class ArticleDeleteDialogComponent {

    article: Article;

    constructor(
        private articleService: ArticleService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.articleService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'articleListModification',
                content: 'Deleted an article'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-article-delete-popup',
    template: ''
})
export class ArticleDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private articlePopupService: ArticlePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.articlePopupService
                .open(ArticleDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
