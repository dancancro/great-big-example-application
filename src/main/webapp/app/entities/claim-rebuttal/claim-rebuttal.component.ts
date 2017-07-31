import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-claim-rebuttal',
    templateUrl: './claim-rebuttal.component.html'
})
export class ClaimRebuttalComponent implements OnInit, OnDestroy {
claimRebuttals: ClaimRebuttal[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private claimRebuttalService: ClaimRebuttalService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.claimRebuttalService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: Response) => this.claimRebuttals = res.json(),
                    (res: Response) => this.onError(res.json())
                );
            return;
       }
        this.claimRebuttalService.query().subscribe(
            (res: Response) => {
                this.claimRebuttals = res.json();
                this.currentSearch = '';
            },
            (res: Response) => this.onError(res.json())
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
        this.registerChangeInClaimRebuttals();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ClaimRebuttal) {
        return item.id;
    }
    registerChangeInClaimRebuttals() {
        this.eventSubscriber = this.eventManager.subscribe('claimRebuttalListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
