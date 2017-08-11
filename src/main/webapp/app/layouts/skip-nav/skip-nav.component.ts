/**
 * @module CoreModule
 */ /** */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
/**
 * @whatItDoes Provides a shortcut button to skip the main navigation for accessibility purposes.
 *
 * **Features:**
 * - Only shows the skip button on focus (usually the first tab keypress)
 * - Can Automatically skip navigation on route changes if the page has already loaded.
 * - Uses `aria-label` to notify the user that navigation has been skipped
 * - Can easily be reused! This is a html container element that wraps around the main navigation
 * so you can just drop in any navigation component and it should work as expected.
 */
@Component({
    selector: 'c2c-skip-nav',
    templateUrl: './skip-nav.component.html',
    styleUrls: ['./skip-nav.component.scss']
})
export class SkipNavComponent implements OnInit {
    /**
     * The `aria-label` text provided after navigation is skipped.
     */
    skipLabel: string;
    /**
     * Tabindex given to the `div` that receives focus after skipping navigation.
     */
    startContentIndex: number = null;
    /**
     * A reference to the `div` that receives focus after skipping navigation.
     */
    @ViewChild('startOfContent') startOfContent: ElementRef;
    /**
     * Indicates if the initial page load has completed.
     */
    private initalLoadComplete = false;
    /**
     * Creates the {@link SkipNavComponent}.
     * @param router used to listen to route changes
     */
    constructor(
        private router: Router) { }
    /**
     * Sets up route listener on component creation.
     */
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.autoSkipNav();
                this.initalLoadComplete = true;
            }
        });
    }
    /**
     * Manually skip navigation
     */
    skipNavigation() {
        this.skipLabel = 'You have skipped to the main content';
        this.focusPastNav();
    }
    /**
     * Automatically skip navigation on page
     * navigation
     */
    autoSkipNav() {
        if (!this.initalLoadComplete) { return; } // Only auto skip after inital load
        this.skipLabel = 'Skipping to the main content';
        this.focusPastNav();
    }
    /**
     * Remove `#start-of-content` from the taborder
     * after it loses focus
     */
    startContentBlur() {
        this.startContentIndex = null;
    }
    /**
     * Set focus on `#start-of-content` and set the
     * tabindex to allow normal tab flow
     */
    private focusPastNav() {
        this.startContentIndex = 0;
        setTimeout(() => this.startOfContent.nativeElement.focus());
    }
}
