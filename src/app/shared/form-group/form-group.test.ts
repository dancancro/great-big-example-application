import {
  async,
  inject,
} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RioFormGroup} from './form-group';
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
        RioFormGroupTestController
      ],
      providers: [
        RioFormGroup
      ]
    });
    fixture = TestBed.createComponent(RioFormGroupTestController);
    fixture.detectChanges();
  });

  it('should inject the component', inject([RioFormGroup],
    (component: RioFormGroup) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioFormGroup));
      expect(query).toBeTruthy();
      expect(query.componentInstance).toBeTruthy();
    });
  })));

});

@Component({
  selector: 'test',
  template: `
    <rio-form-group
      qaid="test-1">
    </rio-form-group>
  `
})
class RioFormGroupTestController { }

