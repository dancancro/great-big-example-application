import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { RebuttalService } from './rebuttal.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-rebuttal',
    templateUrl: './rebuttal.component.html'
})
export class RebuttalComponent implements OnInit, OnDestroy {
rebuttals: Rebuttal[];
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
        this.currentSearch = this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ?
            this.activatedRoute.snapshot.params['search'] : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.rebuttalService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: HttpResponse<Rebuttal[]>) => this.rebuttals = res.body,
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
       }
        this.rebuttalService.query().subscribe(
            (res: HttpResponse<Rebuttal[]>) => {
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
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInRebuttals();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Rebuttal) {
        return item.id;
    }
    registerChangeInRebuttals() {
        this.eventSubscriber = this.eventManager.subscribe('rebuttalListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
