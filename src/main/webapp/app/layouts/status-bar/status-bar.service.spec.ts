/* tslint:disable:no-unused-variable */
import { EventEmitter, Injectable } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { StatusBarService } from './status-bar.service';
import { MockRouter } from '../../../mocks/mock-router.spec';

describe('Service: StatusBar', () => {
  let mockRouter: MockRouter;
  beforeEach(() => {
    mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      providers: [
        StatusBarService,
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should ...', inject([StatusBarService], (service: StatusBarService) => {
    expect(service).toBeTruthy();
  }));

  it('should set the current route', inject([StatusBarService], (service: StatusBarService) => {
    const testEvent = new NavigationEnd(1, '/test', '/test');
    mockRouter.fakeEvent(testEvent);
    expect(service.currentStatus.route).toBe('/test');
  }));

  it('should not set the current route if not an instance of NavigationEnd', inject([StatusBarService], (service: StatusBarService) => {
    const testEvent = { id: 1, url: '/test', urlAfterRedirect: '/test' };
    mockRouter.fakeEvent(testEvent);
    expect(service.currentStatus.route).toBe(null);
  }));

  it('should set to active', async(inject([StatusBarService], (service: StatusBarService) => {
    service.setActive(true);
    expect(service.active).toBe(true);
    expect(service.animate).toBe(true);
    setTimeout(() => {
      expect(service.animate).toBe(false);
    }, 1200);
  })));

  it('should not change animate on setActive if value is the same', inject([StatusBarService], (service: StatusBarService) => {
    service.active = true;
    service.setActive(true);
    expect(service.active).toBe(true);
    expect(service.animate).toBe(false);
  }));
});
