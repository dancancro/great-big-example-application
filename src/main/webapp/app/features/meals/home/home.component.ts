/**
 * @module HomeModule
 */ /** */
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../../core/api/api.service';
import { StatusBarService } from '../../../layouts/status-bar/status-bar.service';
import { WatchHeightDirective } from '../shared/watch-height/watch-height.directive';
/**
 * @whatItDoes Returns the {@link HomeComponent} view.
 * @consumers {@link HomeModule},  {@link HomeRouting}
 */
@Component({
    selector: 'c2c-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
    /**
     * Data that is bound to the filter pipe. It can pass through filter data and get back data
     * that tells how many results were found after filtering.
     */
    filteredMeta = {
        searchFields: [],
        prefilter: (x, i) => i !== 0
    };
    /**
     * Holds the subscription the to {@link apiService}'s filterOptions Observable
     */
    filterSubscription: Subscription;
    /**
     * Timestamp of the last time the filter was updated.
     *
     * Used to notify the related filter pipe that a change has occurred.
     */
    filterStamp: number;
    /**
     * Object containing filter data.
     */
    filterValues: any;
    /**
     * The height of the `.fixed-content` element. Used to offset the scrolling content in the
     * `.home-content` element.
     */
    fixedHeight: number;
    /**
     *
     */
    limit = 9;
    /**
     * A reference to the component that helps the {@link FilterComponent} stick to the top of the page
     */
    stickyScroll: ElementRef;
    /**
     * Reference to the {@link WatchHeightDirective} which enables manually calling the directive's
     * functions.
     */
    @ViewChild(WatchHeightDirective) wh: WatchHeightDirective;
    /**
     * Creates the {@link HomeComponent}
     * @param apiService the api used to get data for the recipe
     * @param window a reference to the global window object
     */
    constructor(
        public apiService: ApiService,
        public statusBarService: StatusBarService,
        @Inject('Window') private window: Window) { }
    /**
     * Updates the scroll position each time the filter updates so that the filter bar is touching
     * the top of the page.
     */
    onFilterUpdate(yPos: number) {
        setTimeout(() => this.window.scrollTo(0, yPos + 100));
    }
    /**
     * Unsubscribes from the {@link filterSubscription} to prevent memeory leaks.
     */
    ngOnDestroy() {
        this.filterSubscription && this.filterSubscription.unsubscribe();
    }
    /**
     * Updates search fields from api
     */
    ngOnInit() {
        this.filterSubscription = this.apiService.filterOptions.subscribe((options) => {
            this.filteredMeta.searchFields = options['searchFields'];
        });
    }
    onScroll() {
        this.limit += 6;
    }
}
