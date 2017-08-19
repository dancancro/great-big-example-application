/**
 * @module CoreModule
 */ /** */
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/**
 * @whatItDoes Reponsible for handling and dispatching global events such as `window` resizing,
 * `body` scrolling, etc.
 * @consumers {@link StickyScrollComponent}, {@link WatchHeightDirective}
 * @providerScope {@link AppComponent}
 */
@Injectable()
export class GlobalEventsService {
  /**
   * Collection of EventEmiiters that broadcast DOM actionable global events.
   */
  emitters$ = {};
  /**
   * True for any event type that is currently waiting for `requestAnimationFrame` to complete. All
   * animation requests initiated while true will be ignored for the given event type.
   */
  ticking = {
    scroll: false,
    resize: false
  };
  /**
   * Creates the {@link GlobalEventsService}
   * @param window `@Inject` is used to allow a mock window during testing
   * (following this [Stackoverflow answer](http://stackoverflow.com/a/38875374/5357459)).
   */
  constructor(
    @Inject('Window') private window: Window) {
    this.onInit();
  }
  /**
   * Triggered once when the service is created
   */
  onInit() {
    this.setupEmitters();
  }
  /**
   * Called on each event (e.g. scroll/resize)
   *
   * - If `requestAnimationFrame` is currently running, then it will skip this event.
   * - When the browser calls `requestAnimationFrame` the event requested will emit to the
   * subscribers of this event that it is okay to perform short, optimized DOM operations.
   */
  private requestTick(type) {
    if (!this.ticking[type]) {
      requestAnimationFrame(() => {
        this.emitters$[type].emit();
        this.ticking[type] = false;
      });
    }
    this.ticking[type] = true;
  }
  /**
   * Sets up listeners to the scroll and resize events. These are filtered by
   * {@link requestTick}.
   */
  private setupEmitters() {
    this.emitters$['scroll'] = new EventEmitter();
    this.emitters$['resize'] = new EventEmitter();
    Observable.fromEvent(this.window, 'scroll')
      .subscribe(() => this.requestTick('scroll'));
    Observable.fromEvent(this.window, 'resize')
      .subscribe(() => this.requestTick('resize'));
  }
}
