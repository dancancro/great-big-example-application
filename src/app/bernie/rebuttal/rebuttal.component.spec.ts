/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { addMatchers, click } from '../../shared/test/util';
import { RebuttalComponent } from './rebuttal.component';
import { SharedModule } from '../../shared/shared.module';
import { initialRebuttal, Rebuttal } from '../../core/store/rebuttal/rebuttal.model';
import { Claim } from '../../core/store/claim/claim.model';

beforeEach(addMatchers);

describe('RebuttalComponent', () => {
  let comp: RebuttalComponent;
  let expectedClaim: any;
  let expectedRebuttal: any;
  let expectedPage: any;
  let fixture: ComponentFixture<RebuttalComponent>;
  let rebuttalEl: DebugElement;
  let cancelButtonEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RebuttalComponent
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuttalComponent);
    comp = fixture.componentInstance;
    rebuttalEl = fixture.debugElement.query(By.css('.drag-handle')); // find an element
    cancelButtonEl = fixture.debugElement.query(By.css('.cancel')); // find an element

    // pretend that it was wired to something that supplied a hero
    expectedClaim = {
      id: 123,
      name: 'Test Rebuttal',
      rebuttalsReordered: false,
      expanded: false
      // isAdding: function (rebuttals) {
      //   return rebuttals.find((rebuttal) => rebuttal.editing && (rebuttal.id === null)) !== undefined;
      // }
    };
    expectedRebuttal = {
      id: 234,
      shortName: 'Test',
      longName: 'Test Test',
      link: 'http://www.github.com',
      comments: 'Some comments',
      isNew: false,
      editing: false,
      original: null
      // isTouched: function () {
      //   return this.original && (this.original.shortName !== this.shortName ||
      //     this.original.longName !== this.longName ||
      //     this.original.link !== this.link ||
      //     (this.original.comments || '') !== (this.comments || ''));
      // }
    };
    expectedPage = {
      editable: true,
    };
    comp.claim = expectedClaim;
    comp.rebuttal = expectedRebuttal;
    comp.page = expectedPage;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  // it('should raise cancel event when clicked', () => {
  //   let canceledRebuttal: Rebuttal;
  //   comp.cancel.subscribe((claim: Claim, rebuttal: Rebuttal) => canceledRebuttal = rebuttal);

  //   cancelButtonEl.triggerEventHandler('click', null);
  //   expect(canceledRebuttal).toBe(expectedRebuttal);
  // });
});
