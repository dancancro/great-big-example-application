import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@Injectable()
export class ArticlePopupService {
    private isOpen = false;
    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private articleService: ArticleService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.articleService.find(id).subscribe((article) => {
                article.createdAt = this.datePipe
                    .transform(article.createdAt, 'yyyy-MM-ddThh:mm');
                article.updatedAt = this.datePipe
                    .transform(article.updatedAt, 'yyyy-MM-ddThh:mm');
                this.articleModalRef(component, article);
            });
        } else {
            return this.articleModalRef(component, new Article());
        }
    }

    articleModalRef(component: Component, article: Article): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.article = article;
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
