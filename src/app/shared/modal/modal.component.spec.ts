import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { RioModalComponent } from './modal.component';
import { SharedModule } from '../shared.module';

describe('Component: Modal', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        RioModalTestController
      ],
      providers: [
        RioModalComponent
      ]
    });
    fixture = TestBed.createComponent(RioModalTestController);
    fixture.detectChanges();
  });

  it('should inject the component', inject([RioModalComponent],
    (component: RioModalComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioModalComponent));
      expect(query).toBeTruthy();
      expect(query.componentInstance).toBeTruthy();
    });
  })));
});

@Component({
  selector: 'test',
  template: `
    <rio-modal></rio-modal>
  `
})
class RioModalTestController { }

