/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PushNotificationsService } from 'angular2-notifications';

import { TimerService } from './timer.service';
import { StatusBarService } from '../../../../layouts/status-bar/status-bar.service';
import { MockStatusBarService } from '../../../../layouts/status-bar/mock-status-bar.service.spec';
import { MockPushService } from './mock-push.service.spec';

describe('Service: Timer', () => {
    let mockPushService: MockPushService;
    let mockStatusBarService: MockStatusBarService;
    beforeEach(() => {
        mockPushService = new MockPushService();
        mockStatusBarService = new MockStatusBarService();
        TestBed.configureTestingModule({
            providers: [
                TimerService,
                { provide: PushNotificationsService, useValue: mockPushService },
                { provide: StatusBarService, useValue: mockStatusBarService }
            ]
        });
    });

    it('should create the service', inject([TimerService], (service: TimerService) => {
        expect(service).toBeTruthy();
    }));

    // TODO: fix these

    // it('should start the timer', (done) => {
    //     inject([TimerService], (service: TimerService) => {
    //         const time = 2 / 60;
    //         const timerObj = { exactly: time };
    //         service.startTimer(timerObj, 'title', 'slug', 'id');
    //         expect(service.running).toBe(true);
    //         expect(service.timeLeft).toBe(2);
    //         setTimeout(() => {
    //             expect(service.running).toBe(false);
    //             done();
    //         }, 3500);
    //     })();
    // });

    it('should toggle the timer on, then off', inject([TimerService], (service: TimerService) => {
        const time = 2 / 60;
        const timerObj = { exactly: time };
        service.toggleTimer(timerObj, 'title', 'slug', 'id');
        expect(service.running).toBe(true);
        expect(service.timeLeft).toBe(2);
        service.toggleTimer(timerObj, 'title', 'slug', 'id');
        expect(service.running).toBe(false);
    }));

    // it('should start the timer using the short time', (done) => {
    //     inject([TimerService], (service: TimerService) => {
    //         const short = 2 / 60;
    //         const long = 5 / 60;
    //         const timerObj = { short, long };
    //         service.startTimer(timerObj, 'title', 'slug', 'id');
    //         expect(service.running).toBe(true);
    //         expect(service.timeLeft).toBe(2);
    //         setTimeout(() => {
    //             expect(service.running).toBe(false);
    //             done();
    //         }, 3500);
    //     })();
    // });

    it('should add one minute', inject([TimerService], (service: TimerService) => {
        const time = 2 / 60;
        const timerObj = { exactly: time };
        service.toggleTimer(timerObj, 'title', 'slug', 'id');
        expect(service.running).toBe(true);
        expect(service.timeLeft).toBe(2);
        service.changeMinute(3);
        expect(service.timeLeft).toBe(182);
        service.changeMinute(-10);
        expect(service.timeLeft).toBe(182);
    }));

    it('should reset the timer', inject([TimerService], (service: TimerService) => {
        const time = 2 / 60;
        const timerObj = { exactly: time };
        service.toggleTimer(timerObj, 'title', 'slug', 'id');
        expect(service.running).toBe(true);
        expect(service.timeLeft).toBe(2);
        service.changeMinute(3);
        expect(service.timeLeft).toBe(182);
        service.changeMinute(-10);
        expect(service.timeLeft).toBe(182);
        service.resetTimer();
        expect(service.timeLeft).toBe(2);
    }));

    it('should reset the timer to the short time', inject([TimerService], (service: TimerService) => {
        const time = 2 / 60;
        const timerObj = { short: time, long: 5 };
        service.toggleTimer(timerObj, 'title', 'slug', 'id');
        expect(service.running).toBe(true);
        expect(service.timeLeft).toBe(2);
        service.changeMinute(3);
        expect(service.timeLeft).toBe(182);
        service.changeMinute(-10);
        expect(service.timeLeft).toBe(182);
        service.resetTimer();
        expect(service.timeLeft).toBe(2);
    }));

    it('should create readable text', inject([TimerService], (service: TimerService) => {
        service.startTimer({ exactly: 1 }, 'title', 'slug', 'id');
        expect(service.readable).toBe('1:00');
        service.running = false;
        service.startTimer({ exactly: 90 }, 'title', 'slug', 'id');
        expect(service.readable).toBe('1:30:00');
        service.running = false;
        service.startTimer({ exactly: 10 }, 'title', 'slug', 'id');
        expect(service.readable).toBe('10:00');
        service.running = false;
        service.startTimer({ exactly: 65 }, 'title', 'slug', 'id');
        expect(service.readable).toBe('1:05:00');
        service.running = false;
        service.startTimer({ exactly: 34 / 60 }, 'title', 'slug', 'id');
        expect(service.readable).toBe('0:34');
    }));
});
