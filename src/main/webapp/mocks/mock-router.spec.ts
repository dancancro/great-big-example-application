import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class MockRouter {
  events = new EventEmitter();
  constructor() {
    this.onInit();
  }
  onInit() {
  }
  fakeEvent(obj) {
    this.events.emit(obj);
  }
}
