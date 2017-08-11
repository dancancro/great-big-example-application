/**
 * @module CoreModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link NavComponent} view
 * @consumers {@link LayoutComponent}
 *
 * Shown at the top of each page.
 */
@Component({
    selector: 'c2c-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent { }
