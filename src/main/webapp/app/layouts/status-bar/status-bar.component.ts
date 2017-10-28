/**
 * @module CoreModule
 */ /** */
import { AfterViewInit, Component, ElementRef, HostBinding } from '@angular/core';

import { StatusBarService } from './status-bar.service';
/**
 * @whatItDoes provides app status messages by pushing app content down from the top revealing
 * this component.
 *
 * **Features:**
 * - Reusable: uses Angular 2 content projection so you can just insert a status bar inside the
 * html of this component.
 */
@Component({
    selector: 'c2c-status-bar',
    templateUrl: 'status-bar.component.html',
    styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements AfterViewInit {
    /**
     * position from the top of the page (uses fixed positioning in css)
     */
    @HostBinding('style.top') top = '0';
    /**
     * Creates the {@link StatusBarComponent}.
     * @param elementRef an element reference of the {@link StatusBarComponent}
     * @param statusBarService app wide service that notifies this componenet of changes to the
     * {@link StatusBarComponent}.
     */
    constructor(
        private elementRef: ElementRef,
        private statusBarService: StatusBarService) { }
    /**
     * Triggered after the view of this componenet is created.
     * - Gets the height of the {@link StatusBarComponent}
     * - Moves out of view on the next change detection cycle (using setTimeout)
     * - Notifies the {@link StatusBarService} of the component's height
     */
    ngAfterViewInit() {
        const height = this.elementRef.nativeElement.clientHeight;
        setTimeout(() => this.top = `-${height}px`);
        this.statusBarService.setBarHeight(height);
    }
}
