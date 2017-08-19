import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { Claim } from './claim.model';
import { ClaimService } from './claim.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../core/config/uib-pagination.config';

@Component({
  selector: 'jhi-claim',
  templateUrl: './claim.component.html'
})
export class ClaimComponent implements OnInit, OnDestroy {
  claims: Claim[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private claimService: ClaimService,
    private alertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private principal: Principal
  ) {
    this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.claimService.search({
        query: this.currentSearch,
      }).subscribe(
        (res: ResponseWrapper) => this.claims = res.json,
        (res: ResponseWrapper) => this.onError(res.json)
        );
      return;
    }
    this.claimService.query().subscribe(
      (res: ResponseWrapper) => {
        this.claims = res.json;
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
    this.registerChangeInClaims();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: Claim) {
    return item.id;
  }
  registerChangeInClaims() {
    this.eventSubscriber = this.eventManager.subscribe('claimListModification', (response) => this.loadAll());
  }

  private onError(error) {
    this.alertService.error(error.message, null, null);
  }
}
