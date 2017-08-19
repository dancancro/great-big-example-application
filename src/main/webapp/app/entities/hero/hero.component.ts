import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../core/config/uib-pagination.config';

@Component({
  selector: 'jhi-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private heroService: HeroService,
    private alertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private principal: Principal
  ) {
    this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.heroService.search({
        query: this.currentSearch,
      }).subscribe(
        (res: ResponseWrapper) => this.heroes = res.json,
        (res: ResponseWrapper) => this.onError(res.json)
        );
      return;
    }
    this.heroService.query().subscribe(
      (res: ResponseWrapper) => {
        this.heroes = res.json;
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
    this.registerChangeInHeroes();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: Hero) {
    return item.id;
  }
  registerChangeInHeroes() {
    this.eventSubscriber = this.eventManager.subscribe('heroListModification', (response) => this.loadAll());
  }

  private onError(error) {
    this.alertService.error(error.message, null, null);
  }
}
