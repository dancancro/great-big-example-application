/**
 * @module HomeModule
 */ /** */
import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Renderer,
    ViewChild
} from '@angular/core';

import { StatusBarService } from '../../../../layouts/status-bar/status-bar.service';
import { GlobalEventsService } from '../../../../core/global-events/global-events.service';
/**
 * @whatItDoes Sets the {@link positionContainer} fixed to top when it reaches the top while the
 * host {@link element} acts as a placeholder in the DOM
 * @consumers {@link FilterComponent}
 */
@Component({
    selector: 'c2c-sticky-scroll',
    templateUrl: './sticky-scroll.component.html',
    styleUrls: ['./sticky-scroll.component.scss']
})
export class StickyScrollComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
    /**
     * An additional amount of px that must be scrolled before sticking takes effect
     */
    @Input() stickyOffset: number;
    /**
     * The height of the {@link positionContainer}
     */
    height: number;
    /**
     * Set to `true` if the host element should be fixed to the top of the screen.
     */
    fixed = false;
    /**
     * The actual content that gets fixed on scroll
     */
    @ViewChild('positionContainer') private positionContainer: ElementRef;
    /**
     * The minimum number of pixels that should be scrolled before {@link fixed} is set to `true`.
     */
    private minScroll: number;
    /**
     * Subscriptions to observables that need to be unsubscribed when the {@link ngOnDestroy}
     * lifecycle hook is called.
     */
    private subscriptions = {
        resize: null,
        scroll: null
    };
    /**
     * Creates the {@link StickyScrollDirective}
     * @param globalEventsService provides a subscription to global events
     * @param el the reference to the host element
     * @param renderer used to make DOM changes to the host element
     */
    constructor(
        public statusBarService: StatusBarService,
        private globalEventsService: GlobalEventsService,
        private element: ElementRef,
        private renderer: Renderer) { }
    /**
     * Manually updates {@link height}
     *
     * - Wrapped in `setTimeout` to run after the view updates
     */
    manualHeightCheck() {
        setTimeout(() => {
            this.height = this.positionContainer.nativeElement.clientHeight;
        }, 0);
    }
    /**
     * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
     * called once, after Angular initializes the host component's views and child views.
     * - Gets the {@link minScroll} distance
     * - Wrapped in `setTimeout` to manually trigger a new digest cycle
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.getDimensions();
        }, 0);
    }
    /**
     * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
     * called once, just before Angular destroys the directive/component.
     * - Unsubscribes from global events
     * - Removes fixed styling if it exists
     */
    ngOnDestroy() {
        this.subscriptions.resize && this.subscriptions.resize.unsubscribe();
        this.subscriptions.scroll && this.subscriptions.scroll.unsubscribe();
        if (this.fixed) {
            // this.removeSticky();
            this.fixed = false;
        }
    }
    /**
     * Updates dimensions when the input value of {@link stickyOffset} changes.
     */
    ngOnChanges() {
        this.getDimensions();
    }
    /**
     * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
     * called once, after the first ngOnChanges.
     * - Subscribes to global resize and scroll events.
     */
    ngOnInit() {
        this.subscriptions.resize = this.globalEventsService.emitters$['resize'].subscribe(() => {
            this.getDimensions();
        });
        this.subscriptions.scroll = this.globalEventsService.emitters$['scroll'].subscribe(() => {
            this.updatePosition();
        });
    }
    /**
     * Get dimensions related to fixing the host element.
     *
     * 1. Remove fixed `position: fixed` (if fixed) to get original position from top
     * 2. Get the minimum scroll distance from the elements position from the top and any offset
     * distance given via {@link stickyOffset}
     * 3. Then update the position which  will immediately restore `position: fixed` if appropriate
     */
    private getDimensions() {
        this.fixed = false;
        this.minScroll = this.element.nativeElement.offsetTop + Number(this.stickyOffset);
        this.updatePosition();
    }
    /**
     * Checks if the host element should be fixed
     */
    private updatePosition() {
        this.fixed = document.body.scrollTop >= this.minScroll;
    }
}
