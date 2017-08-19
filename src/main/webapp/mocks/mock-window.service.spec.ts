import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/**
 * **For Components:**
 * ```
   constructor(
     @Inject('Window') private window: Window
     private otherInjectables: OtherInjectables) { }
 * ```
 *
 * **For tests:**
 * 1. import
 * ```
   import { MockWindowService } from '../../../mocks/mock-window.service.spec';
   ```
 * 2. create
 * ```
   let mockWindowService = new MockWindowService();
   ```
 * 3. Add to providers
 * ```
   providers: [
     { provide: 'Window', useValue: mockWindowService }
   ]
 * ```
 */
@Injectable()
export class MockWindowService {
  events$ = { };
  pageXOffset: number;
  pageYOffset: number;
  innerWidth = 0;
  newEvent(event, eventObject) {
    this.events$[event].next(eventObject);
  }
  addEventListener(event, callback) {
    this.events$[event] = new Subject();
    this.events$[event].asObservable().subscribe(eventObject => {
      callback(eventObject);
    });
  }
  removeEventListener(event, callback) { }
  scrollTo(x, y) {
    this.pageXOffset = x;
    this.pageYOffset = y;
    if ('scroll' in this.events$) {
      this.scrollEvent();
    }
  }
  private scrollEvent() {
    this.newEvent('scroll', {
      x: this.pageXOffset,
      y: this.pageYOffset
    });
  }
}
