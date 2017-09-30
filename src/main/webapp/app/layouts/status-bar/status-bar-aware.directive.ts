/**
 * @module CoreModule
 */ /** */
import { Directive, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { StatusBarService } from './status-bar.service';
/**
 * @whatItDoes moves a fixed position host element with respect to the {@link StatusBarComponent}'s
 * position.
 *
 * **Features:**
 * - Uses the same animation to move as the {@link StatusBarComponent}
 * - Uses translate3d for smoother animation
 */
@Directive({
    selector: '[appStatusBarAware]'
})
export class StatusBarAwareDirective implements OnDestroy, OnInit {
    /**
     * An array of routes to not apply the features of this directive.
     */
    @Input() statusBarExclude: Array<string>;
    /**
     * Holds the subscription for the {@link statusBarService}'s `.service` notifications.
     */
    subscription: Subscription;
    /**
     * The transform style applied during animation.
     */
    @HostBinding('style.transform') transform: string = null;
    /**
     * The transform style applied during animation.
     */
    @HostBinding('style.transition') transition: string;
    /**
     * Creates the {@link StatusBarAwareDirective}.
     * @param statusBarService app wide service that notifies this componenet of changes to the
     * {@link StatusBarComponent}.
     */
    constructor(
        private statusBarService: StatusBarService) { }
    /**
     *
     */
    ngOnDestroy() {
        if (this.subscription !== undefined) { this.subscription.unsubscribe(); }
    }
    /**
     * Subscribes to that {@link StatusBarService}'s notification Observable OnInit
     *
     * On a status update, if the {@link StatusBarComponent} is animating, then this will set the
     * host componenet's style to animate in sync with the {@link StatusBarComponent}
     */
    ngOnInit() {
        this.subscription = this.statusBarService.status.subscribe((status) => {
            this.transform = this.barActive(status) ? `translate3d(0, ${status.height}px, 0)` : null;
            if (this.statusBarService.animate) {
                this.transition = '1s transform';
                setTimeout(() => this.transition = null, 1001);
            }
        });
    }
    /**
     * Returns true if the {@link StatusBarComponent} is active.
     *
     * - It will return false if the current
     * route is excluded via {@link statusBarExclude}.
     */
    barActive(status): boolean {
        const useRoute = !this.statusBarExclude || !this.statusBarExclude.includes(status.route);
        return useRoute && status.height > 0;
    }
}
