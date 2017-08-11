/* tslint:disable:no-unused-variable */

import { Injectable } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { StatusBarAwareDirective } from './status-bar-aware.directive';

import { StatusBarService } from './status-bar.service';
import { MockStatusBarService } from './mock-status-bar.service.spec';

describe('Directive: StatusBarAware', () => {
  let mockStatusBarService: MockStatusBarService;
  let directive: StatusBarAwareDirective;
  beforeEach(() => {
    mockStatusBarService = new MockStatusBarService();
    directive = new StatusBarAwareDirective(mockStatusBarService);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  it('should set transform', (done) => {
    directive.ngOnInit();
    expect(directive.transform).toBe(null);
    mockStatusBarService.setBarHeight(23);
    mockStatusBarService.active = true;
    mockStatusBarService.animate = true;
    mockStatusBarService.updateStatus();
    expect(directive.transform).toBe('translate3d(0, 23px, 0)');
    expect(directive.transition).toBe('1s transform');
    setTimeout(() => {
      expect(directive.transition).toBe(null);
      done();
    }, 1500);
  });
  it('should not transform if in an excluded route', () => {
    directive.statusBarExclude = ['/'];
    directive.ngOnInit();
    directive.transform = 'translate3d(0, 47px, 0)';
    mockStatusBarService.setBarHeight(23);
    mockStatusBarService.active = true;
    mockStatusBarService.currentStatus.route = '/';
    mockStatusBarService.updateStatus();
    expect(directive.transform).toBe(null);
  });
});
