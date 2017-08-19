import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../core/config/uib-pagination.config';

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
    private alertService: JhiAlertService,
    private eventManager: JhiEventManager,
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
        (res: ResponseWrapper) => this.claimRebuttals = res.json,
        (res: ResponseWrapper) => this.onError(res.json)
        );
      return;
    }
    this.claimRebuttalService.query().subscribe(
      (res: ResponseWrapper) => {
        this.claimRebuttals = res.json;
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
