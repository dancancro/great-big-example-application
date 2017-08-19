import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { RebuttalService } from './rebuttal.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../core/config/uib-pagination.config';

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
    private alertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private principal: Principal
  ) {
    this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.rebuttalService.search({
        query: this.currentSearch,
      }).subscribe(
        (res: ResponseWrapper) => this.rebuttals = res.json,
        (res: ResponseWrapper) => this.onError(res.json)
        );
      return;
    }
    this.rebuttalService.query().subscribe(
      (res: ResponseWrapper) => {
        this.rebuttals = res.json;
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
    this.alertService.error(error.message, null, null);
  }
}
