/**
 * @module CoreModule
 */ /** */
import { Component } from '@angular/core';

import { TimerService } from './timer.service';
/**
 * @whatItDoes Provides a timer for the user to set when their current recipe item will complete.
 *
 * **Features:**
 * - Can stop and reset the timer, and can increase and decrease the timer amount.
 */
@Component({
    selector: 'c2c-recipe-timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
    /**
     * Creates the {@link TimerComponent}.
     * @param timerService the timer service that is used to notify this component about the timer's
     * current state.
     */
    constructor(
        public timerService: TimerService) {

    }
}
