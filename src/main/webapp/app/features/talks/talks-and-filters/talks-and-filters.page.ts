import { Component, Inject, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Filters } from '../talks.layout';
import * as fromRoot from '../../../core/store';
import { Talk } from '../../../core/store/talk/talk.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'jhi-talks-and-filters-page',
    templateUrl: './talks-and-filters.page.html',
    styleUrls: ['./talks-and-filters.page.css']
})
export class TalksAndFiltersPage implements OnInit {
    filters$: Store<Filters>;
    talks$: Store<Talk[]>;

    constructor(private router: Router, private store: Store<fromRoot.RootState>) {
    }

    ngOnInit() {
        this.filters$ = this.store.select(fromRoot.getTalksPageFilters);
        this.talks$ = this.store.select(fromRoot.getTalks);
    }

    handleFiltersChange(filters: Filters): void {
        this.router.navigate(['/features/talks', this.createParams(filters)]);
    }

    private createParams(filters: Filters): Params {
        const r: any = {};
        if (filters.speaker) r.speaker = filters.speaker;
        if (filters.title) r.title = filters.title;
        if (filters.minRating) r.minRating = filters.minRating;
        return r;
    }
}
