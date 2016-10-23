import {
  async,
  inject,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RioLabel } from './label';
import {TestBed} from '@angular/core/testing/test_bed';
import {RioFormModule} from './form.module';

describe('Component: Navigator', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RioFormModule
      ],
      declarations: [
        RioLabelTestController
      ],
      providers: [
        RioLabel
      ]
    });
    fixture = TestBed.createComponent(RioLabelTestController);
    fixture.detectChanges();
  });

  it('should inject the component', inject([RioLabel],
    (component: RioLabel) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioLabel));
      expect(query).toBeTruthy();
      expect(query.componentInstance).toBeTruthy();
    });
  })));

    it('should set the id to qaid value', async(inject([], () => {
      fixture.whenStable().then(() => {
        fixture.autoDetectChanges();
        let query = fixture.debugElement
          .query(By.directive(RioLabel));
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
class RioLabelTestController { }

