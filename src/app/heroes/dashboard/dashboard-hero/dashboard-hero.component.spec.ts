import {
  async, ComponentFixture, TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { addMatchers, click } from '../../../shared/test/util';

import { Hero, initialHero } from '../../../core/store/hero/hero.model';
import { DashboardHeroComponent } from './dashboard-hero.component';

beforeEach(addMatchers);

describe('DashboardHeroComponent when tested directly', () => {

  let comp: DashboardHeroComponent;
  let expectedHero: Hero;
  let fixture: ComponentFixture<DashboardHeroComponent>;
  let heroEl: DebugElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardHeroComponent],
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroComponent);
    comp = fixture.componentInstance;
    heroEl = fixture.debugElement.query(By.css('.hero')); // find hero element

    // pretend that it was wired to something that supplied a hero
    expectedHero = Object.assign({}, initialHero, { id: '42', name: 'Test Name' });
    comp.hero = expectedHero;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    let selectedHero: Hero;
    comp.selected.subscribe((hero: Hero) => selectedHero = hero);

    heroEl.triggerEventHandler('click', null);
    expect(selectedHero).toBe(expectedHero);
  });

  it('should raise selected event when clicked', () => {
    let selectedHero: Hero;
    comp.selected.subscribe((hero: Hero) => selectedHero = hero);

    click(heroEl);   // triggerEventHandler helper
    expect(selectedHero).toBe(expectedHero);
  });
});

//////////////////

describe('DashboardHeroComponent when inside a test host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let heroEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardHeroComponent, TestHostComponent], // declare both
    }).compileComponents();
  }));

  beforeEach(() => {
    // create TestHostComponent instead of DashboardHeroComponent
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    heroEl = fixture.debugElement.query(By.css('.hero')); // find hero
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = testHost.hero.name.toUpperCase();
    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    click(heroEl);
    // selected hero should be the same data bound hero
    expect(testHost.selectedHero).toBe(testHost.hero);
  });
});

////// Test Host Component //////
import { Component } from '@angular/core';

@Component({
  template: `
    <dashboard-hero  [hero]="hero"  (selected)="onSelected($event)"></dashboard-hero>`
})
class TestHostComponent {
  hero = Object.assign({}, initialHero, { id: '42', name: 'Test Name' });
  selectedHero: Hero;
  onSelected(hero: Hero) { this.selectedHero = hero; }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
