import { EventEmitter, Injectable } from '@angular/core';

import { PushNotificationsService } from 'angular2-notifications';

@Injectable()
export class MockPushService extends PushNotificationsService {
  constructor() {
    super();
  }
  create(title, obj) {
    return new EventEmitter;
  }
  requestPermission() {
    this.permission = 'granted';
  }
}
