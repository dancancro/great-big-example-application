/**
 * @module HomeModule
 */ /** */
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { GlobalEventsService } from '../../../../core/global-events/global-events.service';
import { FilterItems } from './filter-options';
import { FilterUtilitiesService } from './filter-utilities.service';
/**
 * @whatItDoes Returns a filter bar that filters recipes
 * @consumers {@link HomeComponent}
 */
@Component({
    selector: 'c2c-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements AfterViewInit, OnDestroy, OnInit {
    /**
     * Emits the time during an update to trigger pipes relying on an {@link update} event.
     */
    @Output() change = new EventEmitter();
    /**
     * Option to prevent {@link onScroll} default behaviour.
     */
    dontCloseOnScroll = false;
    /**
     * Ouputs events related to the drawer opening/closing.
     */
    @Output() drawerEvent = new EventEmitter();
    /**
     * Current state of the drawer.
     *
     * - The drawer is div that shows/hides extra filter options
     * - Set to closed by default
     */
    drawerOpen = false;
    /**
     * Optional filter items.
     *
     * - Filter by search
     * - Filter by select boxes (array)
     */
    @Input() filterItems: FilterItems;
    /**
     * Contains filter information usually sent to a pipe for filtering data.
     */
    filterValues = {};
    /**
     * Used to reorder the input fields via the {@link RemapPipe}
     */
    map: string;
    /**
     * Holds the subscription for the {@link globalEventsService}'s resize subscription.
     */
    resizeSubscription: Subscription;
    /**
     * Used to hold the `.unsubscribe()` method to the scroll subscription when active.
     *
     * - Unsubscribe is called if the user scrolls while the drawer is open.
     */
    scrollSubscription: Subscription;
    /**
     * Emits the {@link filterValues} object.
     */
    @Output() update = new EventEmitter();
    /**
     * True if the filter bar is at the top of the page for sure.
     */
    private showingResults = false;
    /**
     * Creates the {@link FilterComponent}
     * @param el a reference to the FilterComponent element
     * @param filterUtilitiesService used for simple utility functions.
     * @param globalEventsService used to subscribe to global events like scroll
     */
    constructor(
        private el: ElementRef,
        private filterUtilitiesService: FilterUtilitiesService,
        private globalEventsService: GlobalEventsService,
        @Inject('Window') private window: Window) { }
    /**
     * After the view has loaded, assume that the results may not be showing.
     */
    ngAfterViewInit() {
        this.showingResults = false;
    }
    /**
     * Removes the resize subscription on destroy to prevent memory leaks.
     */
    ngOnDestroy() {
        this.resizeSubscription && this.resizeSubscription.unsubscribe();
    }
    /**
     * - Subscribes to the global scroll event.
     * - Subscribes to the global resize event and assumes results may not be showing on resize.
     * - Triggers an update with init data
     */
    ngOnInit() {
        this.resizeSubscription = this.globalEventsService.emitters$['resize']
            .subscribe(() => {
                this.showingResults = false;
                this.checkWidth();
            });
        this.checkWidth();
    }
    /**
     * Called when the drawer is toggled.
     * **It:**
     * - toggles the drawer state
     * - emits a drawer event
     * - unscrolls the page when the drawer opens
     */
    onDrawerToggle() {
        this.drawerOpen = !this.drawerOpen;
        if (this.drawerOpen) {
            this.dontCloseOnScroll = true;
            this.change.emit(new Date().getTime());
            this.scrollSubscription = this.globalEventsService.emitters$['scroll']
                .subscribe(() => this.onScroll());
        } else {
            this.closeDrawer();
        }
        this.drawerEvent.emit();
    }
    /**
     * Called on scroll.
     * - Default: closes the drawer and emits a drawer event
     * - {@link dontCloseOnScroll} allows to skip the default behaviour
     * - sends a drawer event via the {@link drawerEvent} output.
     */
    onScroll() {
        if (this.dontCloseOnScroll) {
            this.dontCloseOnScroll = false;
        } else {
            this.closeDrawer();
        }
    }
    /**
     * Triggered on an update from a select input.
     *
     * - Turns the human name into a camelcase key
     * - Attaches the new value to the key
     * - Send the data via {@link onUpdate}
     */
    onSelectUpdate(name: string, value) {
        const camelName = this.filterUtilitiesService.camelize(name);
        this.filterValues[camelName] = value;
        this.onUpdate();
    }
    /**
     * Triggered on an update from all inputs
     *
     * - Emits the current filter values
     * - Emits the current time to trigger pure pipes
     */
    onUpdate() {
        this.update.emit(this.filterValues);
        this.change.emit(new Date().getTime());
    }
    /**
     * Checks the width to set {@link map} to mobile if necessary.
     */
    private checkWidth() {
        if (this.window.innerWidth > 767) {
            this.map = 'default';
        } else {
            this.map = 'mobile';
        }
    }
    /**
     * Closes the additional filter options.
     *
     * - Unsbuscribes from the scroll subscription
     * - Resets varibles
     * - Emits a drawer event
     */
    private closeDrawer() {
        this.scrollSubscription.unsubscribe();
        this.showingResults = false;
        this.drawerOpen = false;
        this.drawerEvent.emit();
    }
}
