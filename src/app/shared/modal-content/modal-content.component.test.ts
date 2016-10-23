import {
  inject
} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RioModalContentComponent} from './modal-content.component';
import {TestBed} from '@angular/core/testing/test_bed';
import {SharedModule} from '../shared.module';

describe('Component: Modal Content', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        RioModalContentComponentTestController
      ],
      providers: [
        RioModalContentComponent
      ]
    });
    fixture = TestBed.createComponent(RioModalContentComponentTestController);
    fixture.detectChanges();
  });

  it('should inject the component', inject([RioModalContentComponent],
    (component: RioModalContentComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioModalContentComponent));
      expect(query).toBeTruthy();
      expect(query.componentInstance).toBeTruthy();
    });
  }));
});

@Component({
  selector: 'test',
  template: `
    <rio-modal-content></rio-modal-content>
  `
})
class RioModalContentComponentTestController {}

