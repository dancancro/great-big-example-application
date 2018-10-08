import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IRebuttal } from 'app/shared/model/rebuttal.model';
import { Principal } from 'app/core';
import { RebuttalService } from './rebuttal.service';

@Component({
    selector: 'jhi-rebuttal',
    templateUrl: './rebuttal.component.html'
})
export class RebuttalComponent implements OnInit, OnDestroy {
    rebuttals: IRebuttal[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private rebuttalService: RebuttalService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch =
            this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search']
                ? this.activatedRoute.snapshot.params['search']
                : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.rebuttalService
                .search({
                    query: this.currentSearch
                })
                .subscribe(
                    (res: HttpResponse<IRebuttal[]>) => (this.rebuttals = res.body),
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
        }
        this.rebuttalService.query().subscribe(
            (res: HttpResponse<IRebuttal[]>) => {
                this.rebuttals = res.body;
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
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
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInRebuttals();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IRebuttal) {
        return item.id;
    }

    registerChangeInRebuttals() {
        this.eventSubscriber = this.eventManager.subscribe('rebuttalListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
