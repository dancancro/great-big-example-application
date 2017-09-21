import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { Author } from './author.model';
import { AuthorService } from './author.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../core/config/uib-pagination.config';

@Component({
    selector: 'jhi-author',
    templateUrl: './author.component.html'
})
export class AuthorComponent implements OnInit, OnDestroy {
    authors: Author[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private authorService: AuthorService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.authorService.search({
                query: this.currentSearch,
            }).subscribe(
                (res: ResponseWrapper) => this.authors = res.json,
                (res: ResponseWrapper) => this.onError(res.json)
                );
            return;
        }
        this.authorService.query().subscribe(
            (res: ResponseWrapper) => {
                this.authors = res.json;
                this.currentSearch = '';
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInAuthors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Author) {
        return item.id;
    }

    // byteSize(field) {
    //     return this.dataUtils.byteSize(field);
    // }

    // openFile(contentType, field) {
    //     return this.dataUtils.openFile(contentType, field);
    // }
    registerChangeInAuthors() {
        this.eventSubscriber = this.eventManager.subscribe('authorListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
