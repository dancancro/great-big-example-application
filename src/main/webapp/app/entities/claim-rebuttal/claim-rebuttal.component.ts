import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';
import { Principal } from '../../shared';

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
            this.claimRebuttalService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: HttpResponse<ClaimRebuttal[]>) => this.claimRebuttals = res.body,
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
       }
        this.claimRebuttalService.query().subscribe(
            (res: HttpResponse<ClaimRebuttal[]>) => {
                this.claimRebuttals = res.body;
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
        this.jhiAlertService.error(error.message, null, null);
    }
}
