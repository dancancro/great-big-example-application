import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';
import { Principal } from 'app/core';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Component({
    selector: 'jhi-claim-rebuttal',
    templateUrl: './claim-rebuttal.component.html'
})
export class ClaimRebuttalComponent implements OnInit, OnDestroy {
    claimRebuttals: IClaimRebuttal[];
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
        this.currentSearch =
            this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search']
                ? this.activatedRoute.snapshot.params['search']
                : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.claimRebuttalService
                .search({
                    query: this.currentSearch
                })
                .subscribe(
                    (res: HttpResponse<IClaimRebuttal[]>) => (this.claimRebuttals = res.body),
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
        }
        this.claimRebuttalService.query().subscribe(
            (res: HttpResponse<IClaimRebuttal[]>) => {
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
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInClaimRebuttals();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IClaimRebuttal) {
        return item.id;
    }

    registerChangeInClaimRebuttals() {
        this.eventSubscriber = this.eventManager.subscribe('claimRebuttalListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
