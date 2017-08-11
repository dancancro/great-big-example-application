/**
 * @module CoreModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link FooterComponent} view
 * @consumers {@link LayoutComponent}
 *
 * Shown at the bottom of each page.
 */
@Component({
    selector: 'jhi-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent { }
