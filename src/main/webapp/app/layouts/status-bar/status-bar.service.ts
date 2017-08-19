/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { CurrentStatus } from './current-status.interface';
/**
 * @whatItDoes tracks the status of the {@link StatusBarComponent} and notifies all components with
 * the {@link StatusBarAwareDirective} that a change has occurred.
 */
@Injectable()
export class StatusBarService {
    /**
     * True if the {@link StatusBarComponent} is animating. This is true for one second after
     * {@link active} is set to false because it will be animating up and out of view.
     */
    animate = false;
    /**
     * True when the status bar is in use.
     */
    active = false;
    /**
     * Data related to what is happening with the {@link StatusBarComponent}.
     */
    currentStatus: CurrentStatus = { route: null, height: 0 };
    /**
     * An Observable used to push changes related to the status of the {@link StatusBarComponent}.
     */
    status: ReplaySubject<CurrentStatus> = new ReplaySubject();
    /**
     * True if a transform style is currently applied to a {@link StatusBarAwareDirective}'s host
     * component.
     */
    private transformActive: number;
    /**
     * Creates the {@link StatusBarComponent} and triggers {@link onInit}.
     * @param router used to track the current route.
     */
    constructor(
        private router: Router) {
        this.onInit();
    }
    /**
     * On service creation a subscription is made to the router and an updated status is sent
     * on route change.
     *
     * - Needed if for the {@link StatusBarAwareDirective} if it needs to exlude application for
     * specific routes.
     */
    onInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentStatus.route = event.url;
                this.updateStatus();
            }
        });
    }
    /**
     * Animates the {@link StatusBarComponent} into view and notifies related components to move
     * out of the way.
     */
    setActive(newValue: boolean) {
        if (newValue !== this.active) {
            this.animate = true;
            setTimeout(() => {
                this.animate = false;
            }, 1001);
        }
        this.active = newValue;
        this.updateStatus();
    }
    /**
     * Updates related components with a new height for the {@link StatusBarComponent}.
     */
    setBarHeight(newHeight) {
        this.transformActive = newHeight;
        this.updateStatus();
    }
    /**
     * Pushes the current status to related componenets.
     */
    updateStatus() {
        this.currentStatus.height = this.active ? this.transformActive : 0;
        this.status.next(this.currentStatus);
    }
}
