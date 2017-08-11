/**
 * @module AboutModule
 */ /** */
import { Component } from '@angular/core';

import { ApiService } from '../../core/api/api.service';
/**
 * @whatItDoes Returns the {@link AboutComponent} view.
 * @consumers {@link AboutModule},  {@link AboutRouting}
 */
@Component({
    selector: 'c2c-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    /**
     * Creates the {@link LegaAboutComponentlComponent}.
     * @param apiService used to retrive the about info used in the template
     */
    constructor(
        public apiService: ApiService) { }
}
