import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { Crisis } from './crisis.model';
import { CrisisService } from './crisis.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../core/config/uib-pagination.config';

@Component({
  selector: 'jhi-crisis',
  templateUrl: './crisis.component.html'
})
export class CrisisComponent implements OnInit, OnDestroy {
  crises: Crisis[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private crisisService: CrisisService,
    private alertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private principal: Principal
  ) {
    this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.crisisService.search({
        query: this.currentSearch,
      }).subscribe(
        (res: ResponseWrapper) => this.crises = res.json,
        (res: ResponseWrapper) => this.onError(res.json)
        );
      return;
    }
    this.crisisService.query().subscribe(
      (res: ResponseWrapper) => {
        this.crises = res.json;
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
    this.registerChangeInCrises();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: Crisis) {
    return item.id;
  }
  registerChangeInCrises() {
    this.eventSubscriber = this.eventManager.subscribe('crisisListModification', (response) => this.loadAll());
  }

  private onError(error) {
    this.alertService.error(error.message, null, null);
  }
}
