/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';

import { StatusBarService } from '../../../../layouts/status-bar/status-bar.service';
/**
 * @whatItDoes tracks the current status of the time and pushes needed notifications of timer state
 * to timer related components.
 *
 * **Features:**
 * - Sends a push notification to the user if push notifications are enabled.
 */
@Injectable()
export class TimerService {
    /**
     * True if the timer is running
     */
    running = false;
    /**
     * True if the timer is in view. On timer end, this will be true for one second after, while
     * {@link running} will be false.
     */
    showTimer = false;
    /**
     * Time left in the timer countdown.
     */
    timeLeft = 0;
    /**
     * Interval object used to update the timers remaining time.
     */
    interval: any;  // Was NodeJS.Timer. It works now. I don't know why it needed to be changed.
    /**
     * A human readable string showing the remaining time left.
     */
    readable: string;
    /**
     * The id of the related recipe.
     */
    id: string;
    /**
     * The slug of the related recipe. Needed to provide a link back to the recipe in the
     * {@TimerComponent}.
     */
    slug: string;
    /**
     * Title of the related recipe.
     */
    title = 'Clean to the Core';
    /**
     * Timer data passed from a recipe about how long a specific step will take.
     */
    timerObj;
    /**
     * Creates the {@link TimerService}.
     * @param pushNotificationsService handles sending push notifications.
     * @param statusBarService used to trigger showing/hiding the {@link StatusBarComponent}.
     */
    constructor(
        public pushNotificationsService: PushNotificationsService,
        public statusBarService: StatusBarService) {
        console.log('CONSTRUCTING TIMER SERVICE')
    }
    /**
     * - Turns the timer on/off
     * - Requests permission to send push notifications on first call.
     */
    toggleTimer(timerObj, title, slug, id) {
        this.running ? this.stopTimer() : this.startTimer(timerObj, title, slug, id);
        if (this.pushNotificationsService.permission === 'default') {
            this.pushNotificationsService.requestPermission();
        }
    }
    /**
     * Starts the timer.
     */
    startTimer(timerObj, title, slug, id) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.timerObj = timerObj;
        this.timeLeft = 60 * (timerObj.exactly || timerObj.short);
        this.updateReadable();
        this.running = true;
        this.showTimer = true;
        this.statusBarService.setActive(true);
        this.interval = setInterval(() => this.onEachInterval(), 1000);
    }
    /**
     * Stops the timer.
     */
    stopTimer() {
        clearInterval(this.interval);
        this.statusBarService.setActive(false);
        this.running = false;
        setTimeout(() => {
            this.showTimer = false;
        }, 1000);
    }
    /**
     * Resets the timer to the inital value given by the related recipe.
     */
    resetTimer() {
        this.timeLeft = 60 * (this.timerObj.exactly || this.timerObj.short);
        this.updateReadable();
    }
    /**
     * Adds/subtracts a minute from the timer.
     */
    changeMinute(change: number) {
        const newTime = this.timeLeft + (60 * change);
        if (newTime > 0) {
            this.timeLeft = newTime;
            this.updateReadable();
        }
    }
    /**
     * Triggered on each second interval of the timer.
     * - Decreases the remaining time by one second
     * - Updates the readable timer string
     * - If the timer reaches zero, then {@link onTimerComplete} is called
     */
    private onEachInterval() {
        this.timeLeft--;
        this.updateReadable();
        if (this.timeLeft === 0) {
            this.onTimerComplete();
        }
    }
    /**
     * Called on timer completion, and not when the user simply stops the timer.
     * - Sends a push notification (if enabled)
     * - Stops the timer
     */
    private onTimerComplete() {
        const pushObj = {
            body: `Your timer for ${this.title} has finished.`,
            icon: 'assets/push-logo.png'
        };
        this.pushNotificationsService.create('Timer complete', pushObj).subscribe();
        this.stopTimer();
    }
    /**
     * Converts the remaining time to a human readable string.
     * - http://stackoverflow.com/a/11486026/5357459
     */
    private updateReadable() {
        const hrs = Math.floor(this.timeLeft / 3600);
        const mins = Math.floor((this.timeLeft % 3600) / 60);
        const secs = this.timeLeft % 60;
        let ret = '';
        if (hrs > 0) {
            ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
        }
        ret += '' + mins + ':' + (secs < 10 ? '0' : '');
        ret += '' + secs;
        this.readable = ret;
    }
}
