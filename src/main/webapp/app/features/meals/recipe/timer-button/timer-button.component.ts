/**
 * @module RecipeModule
 */ /** */
import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { TimerService } from '../../timer/timer.service';
/**
 * @whatItDoes creates a button to toggle the timer.
 */
@Component({
    selector: 'c2c-recipe-timer-button',
    templateUrl: './timer-button.component.html',
    styleUrls: ['./timer-button.component.scss']
})
export class TimerButtonComponent implements OnChanges, OnInit {
    /**
     * Data about the how long to set the timer.
     */
    @Input() timerObj;
    /**
     * The title for the related recipe - to be shown on the {@link TimerComponent}.
     */
    @Input() title: string;
    /**
     * The id for the related recipe.
     */
    @Input() id: string;
    /**
     * The slug for the related recipe
     */
    @Input() slug: string;
    /**
     * The time text inside the button which is set by {@link updateTime}
     */
    time: string;
    /**
     * True if showing a clickable button, otherwise plain text is shown instead
     */
    showButton: boolean;
    /**
     * Creates the {@link TimerButtonComponent}.
     * @param timerService the timer service that is used to notify this component about the timer's
     * current state.
     */
    constructor(
        public timerService: TimerService) { }
    /**
     * Sets the time text on component creation
     */
    ngOnChanges() {
        this.updateTime();
    }
    /**
     * Updates the time text if there are changes
     */
    ngOnInit() {
        this.updateTime();
    }
    /**
     * Takes the {@link timerObj} and converts it to readable text.
     */
    private updateTime() {
        let temp;
        if (this.timerObj.exactly) {
            temp = this.timerObj.exactly;
        } else {
            temp = this.timerObj.short + '-' + this.timerObj.long;
        }
        temp += ' minute';
        if (this.timerObj.exactly !== '1') { temp += 's'; }
        this.time = temp;
    }
}
