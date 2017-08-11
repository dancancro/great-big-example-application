import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs/Rx';

@Injectable()
export class MockNg2LocalforageService {
  item;
  list;
  constructor() {
    this.onInit();
  }
  onInit() {
    this.item = new Subject();
    this.list = new ReplaySubject();
  }
  getItem(input) {
    if (input === 'list-2') {
      return this.list.asObservable();
    }
    return this.item.asObservable();
  }
  setItem(input) {

  }
  update(updateInput, list?: boolean) {
    if (list) {
      this.list.next(updateInput);
    } else {
      this.item.next(updateInput);
      this.item.complete();
    }
  }
}
