/**
 * @module CoreModule
 */ /** */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { StatusBarService } from '../status-bar/status-bar.service';
/**
 * @whatItDoes Manages all layout functions for the {@link AppComponent}.
 * @purpose The goal for this component is to encapsulate all logic relating to how the app's layout
 * should function.
 *
 * **This allows:**
 * - all sub-components to focus on their own encapsulated behaviour
 * - most layout changes to be made in one place
 * - the {@link AppComponent} to stay lean and focused on its main task, orchestrating the app as a whole
 * - the layout to be separate from other non-layout dependant elements such as modals and alerts
 * - the layout to later be put inside a lazy-loaded route if the site requires a different
 * layout for signed in users
 *
 * For example, a change in the {@link FooterComponent} design shouldn't also require a change in the
 * {@link MealsLayoutComponent} or {@link NavComponent}.
 */
@Component({
    selector: 'c2c-layout',
    templateUrl: './meals-layout.component.html',
    styleUrls: ['./meals-layout.component.scss', './globalz.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MealsLayoutComponent implements OnInit {
    /**
     * Route specific layout options.
     *
     * This lets the {@link NavComponent} view know about any number of route specific
     * layout customization options that are set in the {@link AppRoutingModule} config.
     */
    layout: LayoutOptions;
    /**
     * Current padding of the layout, updated by {@link onHeightChange}.
     *
     * **Padding is set dynamically so that:**
     * - {@link MealsLayoutComponent} does not need to know about other elements' styling
     * - layout sub-components can be made without a predefined height
     * @param padding.top Responds to the height of {@link NavComponent}. Defaults to `20px`.
     * @param padding.bottom Responds to the height of {@link FooterComponent}. Defaults to `20px`.
     */
    padding = {
        top: '20',
        bottom: '20'
    };
    /**
     * Creates the {@link MealsLayoutComponent}.
     */
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private statusBarService: StatusBarService) { }
    /**
     * When {@link NavComponent} or {@link FooterComponent} emits a height change,
     * {@link onHeightChange} adds the new height to the padding of the `.content-area` element.
     * @param position           accepts `top` or `bottom`.
     * @param newHeight          the new pixel height of the element being measured
     * @param additionalPadding  extra padding beyond the pixel height of the element being measured.
     */
    onHeightChange(position: string, newHeight: number, additionalPadding: number) {
        this.padding[position] = newHeight + additionalPadding;
    }
    /**
     * Sets up the route change listener.
     */
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.onNewRoute();
            }
        });
    }
    /**
     * {@link onNewRoute} is responsible for setting up route specific elements relating to the layout.
     *
     * **`this.layout`:** Tells the {@link NavComponent} view about any number of route specific
     * layout customization options that are set in the {@link AppRoutingModule} config.
     *
     * **`scrollTop`:** Scrolls the page to the top.
     * - Without this users will stay at their current scroll position when navigating between pages
     * which is unexpected.
     */
    private onNewRoute() {
        this.layout = this.activatedRoute.snapshot.firstChild.data['layout'];
        document.body.scrollTop = 0;
    }
}
/**
 * Route specific layout options.
 */
export interface LayoutOptions {
    [propName: string]: boolean | number | string;
}
