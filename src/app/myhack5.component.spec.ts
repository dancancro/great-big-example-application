import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Myhack5AppComponent } from '../app/myhack5.component';

beforeEachProviders(() => [Myhack5AppComponent]);

describe('App: Myhack5', () => {
  it('should create the app',
      inject([Myhack5AppComponent], (app: Myhack5AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'myhack5 works!\'',
      inject([Myhack5AppComponent], (app: Myhack5AppComponent) => {
    expect(app.title).toEqual('myhack5 works!');
  }));
});
