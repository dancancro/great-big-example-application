import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IHero } from 'app/shared/model/hero.model';
import { Principal } from 'app/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'jhi-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
    heroes: IHero[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private heroService: HeroService,
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
            this.heroService
                .search({
                    query: this.currentSearch
                })
                .subscribe((res: HttpResponse<IHero[]>) => (this.heroes = res.body), (res: HttpErrorResponse) => this.onError(res.message));
            return;
        }
        this.heroService.query().subscribe(
            (res: HttpResponse<IHero[]>) => {
                this.heroes = res.body;
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
        this.registerChangeInHeroes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IHero) {
        return item.id;
    }

    registerChangeInHeroes() {
        this.eventSubscriber = this.eventManager.subscribe('heroListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
