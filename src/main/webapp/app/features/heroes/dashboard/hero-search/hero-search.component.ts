import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Hero } from '../../../../core/store/hero/hero.model';
import * as fromRoot from '../../../../core/store';
import { slices } from '../../../../core/store/util';
import * as SliceActions from '../../../../core/store/slice/slice.actions';

@Component({
    selector: 'jhi-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit, OnDestroy {
    private heroes$: Store<Hero[]>;
    private searchTermsSub: Subscription;
    private searchTerms = new Subject<string>();

    constructor(
        private store: Store<fromRoot.RootState>,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes$ = this.store.select(fromRoot.getHeroesForSearchTerm);
        this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .subscribe((term) => {
                this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['heroesDashboardPage', 'heroSearchTerm'], term));
            });
    }

    gotoDetail(hero: Hero): void {
        const link = ['/features/heroes/hero', hero.id];
        this.router.navigate(link);
    }

    ngOnDestroy() {
        this.searchTermsSub && this.searchTermsSub.unsubscribe();
    }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
