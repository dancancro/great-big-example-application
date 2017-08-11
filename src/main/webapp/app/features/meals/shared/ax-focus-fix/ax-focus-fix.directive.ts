/**
 * @module SharedModule
 */ /** */
import { Directive, ElementRef, HostBinding, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { GlobalEventsService } from '../../../../core/global-events/global-events.service';
/**
 * @whatItDoes This makes the Chrome accesibility audit pass for
 * [AX_FOCUS_01](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_01).
 *
 * ------------------------------------------
 * ------------------------------------------
 *
 * - It seems that the Chrome accesibility audit does not pass any items that are fixed,
 * even if they are visible and clickable.
 * - If this turns out to be a bug with Chrome, then this directive will need to be replaced with
 * one that simply marks elements as `aria-hidden="true"` when they are not visible or clickable.
 */
@Directive({
    selector: '[appAxFocus01Fix]'
})
export class AxFocusFixDirective implements OnDestroy, OnInit {
    /**
     * Sets the `aria-hidden` attribute of the host element.
     */
    @HostBinding('attr.aria-hidden') ariaHidden: boolean;
    /**
     * A reference to the router subscription created in {@link skipIfHome}.
     */
    routerSubscription: Subscription;
    /**
     * A reference to the scroll subscription created in {@link ngOnInit}.
     */
    scrollSubscription: Subscription;
    /**
     * This directive will not affect skipped routes.
     */
    skipRoute: boolean;
    /**
     * Creates the {@link AxFocusFixDirective}
     * @param document the global `document` variable
     * @param el a reference to the host element
     * @param router used to listen to the current route
     * @param window the global `window` variable
     */
    constructor(
        @Inject('Document') private document: Document,
        private el: ElementRef,
        private globalEventsService: GlobalEventsService,
        private router: Router,
        @Inject('Window') private window: Window) { }
    /**
     * Removes subscription to scroll when the host component is removed.
     */
    ngOnDestroy() {
        if (this.routerSubscription !== undefined) { this.routerSubscription.unsubscribe(); }
        if (this.scrollSubscription !== undefined) { this.scrollSubscription.unsubscribe(); }
    }
    /**
     * - Setup listeners
     * - Detect initial scroll position
     */
    ngOnInit() {
        this.skipIfHome();
        this.document.addEventListener('keydown', (e) => this.onKeyDown(e));
        this.document.addEventListener('keyup', (e) => this.onKeyUp(e));
        this.scrollSubscription = this.globalEventsService.emitters$['scroll']
            .subscribe(() => this.onScroll());
        this.onScroll();
    }
    /**
     * This directive only applies to the home route
     */
    private skipIfHome() {
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.skipRoute = event.url !== '/';
            }
        });
    }
    /**
     * Set host element to visible by screen readers on tab keypress.
     * @param event the keypress event object
     *
     * - the KeyboardEvent keyCode 9 is for tab
     */
    private onKeyDown(event: KeyboardEvent) {
        if (event.keyCode === 9) {
            this.setHidden(false);
        }
    }
    /**
     * On tab keyup, **If:** the host element is not focused, then set it to hidden for screen readers
     * **Otherwise:** scroll to the top of the page.
     * @param event the keyup event object
     *
     * - the KeyboardEvent keyCode 9 is for tab
     */
    private onKeyUp(event: KeyboardEvent) {
        if (event.keyCode === 9) {
            if (this.el.nativeElement === this.document.activeElement) {
                this.window.scrollTo(0, 0);
            } else {
                this.setHidden(true);
            }
        }
    }
    /**
     * On scroll set the host element to hidden only if the page has scrolled.
     */
    private onScroll() {
        const scrollPosition = this.window.pageYOffset || document.documentElement.scrollTop;
        this.setHidden(scrollPosition !== 0);
    }
    /**
     * Sets the host's `aria-hidden` to true if {@link skipRoute} is not enabled.
     */
    private setHidden(newValue: boolean) {
        this.ariaHidden = newValue && !this.skipRoute;
    }
}
