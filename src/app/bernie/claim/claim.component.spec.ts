/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SortablejsModule } from 'angular-sortablejs';

import { addMatchers, click } from '../../shared/test/util';
import { ClaimComponent } from './claim.component';
import { RebuttalComponent } from '../rebuttal/rebuttal.component';
import { SharedModule } from '../../shared/shared.module';
import { initialClaim, Claim } from '../../core/store/claim/claim.model';

beforeEach(addMatchers);

describe('ClaimComponent', () => {
  let comp: ClaimComponent;
  let expectedClaim: any;
  let expectedPage: any;
  let fixture: ComponentFixture<ClaimComponent>;
  let claimEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClaimComponent, RebuttalComponent
      ],
      imports: [
        SortablejsModule,
        SharedModule
      ]
    })
      .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimComponent);
    comp = fixture.componentInstance;
    claimEl = fixture.debugElement.query(By.css('.claim-block')); // find an element


    // pretend that it was wired to something that supplied a hero
    expectedClaim = {
      id: 123,
      name: 'Test Claim',
      rebuttalsReordered: false,
      expanded: false
      // isAdding: function (rebuttals) {
      //   return rebuttals.find((rebuttal) => rebuttal.editing && (rebuttal.id === null)) !== undefined;
      // }
    };
    expectedPage = {
      editable: false,
    };
    comp.claim = expectedClaim;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
