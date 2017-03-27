// For more examples:
//   https://github.com/angular/angular/blob/master/modules/@angular/router/test/integration.spec.ts

import {
  async, ComponentFixture, fakeAsync, TestBed, tick,
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { SpyLocation } from '@angular/common/testing';

import { click } from './shared/test/util';

// r - for relatively obscure router symbols
import * as r from '@angular/router';
import { Router, RouterLinkWithHref } from '@angular/router';

import { By } from '@angular/platform-browser';
import { DebugElement, Type } from '@angular/core';
import { Location } from '@angular/common';

import { AppModule } from './app.module';
import { AppPage } from './app.page';
import { RioAboutPage } from './core/about/about.page';
import { DashboardHeroComponent } from './heroes/dashboard/dashboard-hero/dashboard-hero.component';
import { TwainService } from './shared/twain/twain.service';

let comp: AppPage;
let fixture: ComponentFixture<AppPage>;
let page: Page;
let router: Router;
let location: SpyLocation;

describe('AppPage & RouterTestingModule', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  it('should navigate to "About" immediately', fakeAsync(() => {
    createComponent();
    expect(location.path()).toEqual('/about', 'after initialNavigation()');
    expectElementOf(RioAboutPage);
  }));

  it('should navigate to "About" on click', fakeAsync(() => {
    createComponent();
    click(page.menuButtonDe);
    advance();
    click(page.aboutLinkDe);
    // page.aboutLinkDe.nativeElement.click(); // ok but fails in phantom

    advance();
    expectPathToBe('/about');
    expectElementOf(RioAboutPage);

    // TODO: Figure this one out
    // page.expectEvents([
    //   [r.NavigationStart, '/about'], [r.RoutesRecognized, '/about'],
    //   [r.NavigationEnd, '/about']
    // ]);
  }));

  it('should navigate to "About" w/ browser location URL change', fakeAsync(() => {
    createComponent();
    location.simulateHashChange('/about');
    // location.go('/about'); // also works ... except in plunker
    advance();
    expectPathToBe('/about');
    expectElementOf(RioAboutPage);
  }));

  // Can't navigate to lazy loaded modules with this technique
  xit('should navigate to "Heroes" on click', fakeAsync(() => {
    createComponent();
    page.heroesLinkDe.nativeElement.click();
    advance();
    expectPathToBe('/heroes');
  }));

});


///////////////
import { NgModuleFactoryLoader } from '@angular/core';
import { SpyNgModuleFactoryLoader } from '@angular/router/testing';

import { HeroModule } from './heroes/hero/hero.module';  // should be lazy loaded
import { HeroListComponent } from './heroes/hero/hero-list/hero-list.component';

let loader: SpyNgModuleFactoryLoader;

///////// Can't get lazy loaded Heroes to work yet
xdescribe('AppPage & Lazy Loading', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    createComponent();
    loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = { expected: HeroModule };
    router.resetConfig([{ path: 'heroes', loadChildren: 'expected' }]);
  }));

  it('dummy', () => expect(true).toBe(true));


  it('should navigate to "Heroes" on click', async(() => {
    page.heroesLinkDe.nativeElement.click();
    advance();
    expectPathToBe('/heroes');
    expectElementOf(HeroListComponent);
  }));

  xit('can navigate to "Heroes" w/ browser location URL change', fakeAsync(() => {
    location.go('/heroes');
    advance();
    expectPathToBe('/heroes');
    expectElementOf(HeroListComponent);

    page.expectEvents([
      [r.NavigationStart, '/heroes'], [r.RoutesRecognized, '/heroes'],
      [r.NavigationEnd, '/heroes']
    ]);
  }));
});

////// Helpers /////////

/** Wait a tick, then detect changes */
function advance(): void {
  tick();
  fixture.detectChanges();
}

function createComponent() {
  fixture = TestBed.createComponent(AppPage);
  comp = fixture.componentInstance;

  const injector = fixture.debugElement.injector;
  location = injector.get(Location);
  router = injector.get(Router);
  router.initialNavigation();
  spyOn(injector.get(TwainService), 'getQuote')
    .and.returnValue(Promise.resolve('Test Quote')); // fakes it

  advance();

  page = new Page();
}

class Page {
  aboutLinkDe: DebugElement;
  dashboardLinkDe: DebugElement;
  heroesLinkDe: DebugElement;
  menuButtonDe: DebugElement;
  recordedEvents: any[] = [];

  // for debugging
  comp: AppPage;
  location: SpyLocation;
  router: Router;
  fixture: ComponentFixture<AppPage>;

  expectEvents(pairs: any[]) {
    const events = this.recordedEvents;
    expect(events.length).toEqual(pairs.length, 'actual/expected events length mismatch');
    for (let i = 0; i < events.length; ++i) {
      expect((<any>events[i].constructor).name).toBe(pairs[i][0].name, 'unexpected event name');
      expect((<any>events[i]).url).toBe(pairs[i][1], 'unexpected event url');
    }
  }

  constructor() {
    router.events.forEach(e => this.recordedEvents.push(e));
    const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    this.aboutLinkDe = links[8];
    this.dashboardLinkDe = links[0];
    this.heroesLinkDe = links[1];
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    this.menuButtonDe = buttons[0];

    // for debugging
    this.comp = comp;
    this.fixture = fixture;
    this.router = router;
  }
}

function expectPathToBe(path: string, expectationFailOutput?: any) {
  expect(location.path()).toEqual(path, expectationFailOutput || 'location.path()');
}

function expectElementOf(type: Type<any>): any {
  const el = fixture.debugElement.query(By.directive(type));
  expect(el).toBeTruthy('expected an element for ' + type.name);
  return el;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
