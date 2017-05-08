import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
    selector: 'jhi-timer',
    template: '<div>{{ timer | async }} sec.</div>'
})
export class TimerComponent {
    time = 0;
    timer: Observable<number>;
    private interval: any;
    private observer: Observer<number>;

    reset() {
        if (this.observer) {
            this.observer.next(0);
        }
        this.time = 0;
        clearInterval(this.interval);
    }

    start() {
        this.timer = new Observable<number>((observer: Observer<number>) => {
            this.observer = observer;
            observer.next(this.time);
            this.interval = setInterval(() => {
                this.time += 10;
                observer.next(this.time);
            }, 10);
        });
    }
}
