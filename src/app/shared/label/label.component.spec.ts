import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { RioLabelComponent } from './label.component';
import { SharedModule } from '../shared.module';

describe('Component: Label', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        RioLabelComponentTestController
      ],
      providers: [
        RioLabelComponent
      ]
    });
    fixture = TestBed.createComponent(RioLabelComponentTestController);
    fixture.detectChanges();
  });

  it('should inject the component', inject([RioLabelComponent],
    (component: RioLabelComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioLabelComponent));
      expect(query).toBeTruthy();
      expect(query.componentInstance).toBeTruthy();
    });
  })));

  it('should set the id to qaid value', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioLabelComponent));
      expect(query.nativeElement.querySelector('label')
        .getAttribute('id')).toBe('test-1');
    });
  })));
});

@Component({
  selector: 'test',
  template: `
    <rio-label
      qaid="test-1">
    </rio-label>
  `
})
class RioLabelComponentTestController { }

