import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { RioFormGroupComponent } from './form-group.component';
import { SharedModule } from '../shared.module';

describe('Component: Form Group', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        RioFormGroupTestController
      ],
      providers: [
        RioFormGroupComponent
      ]
    });
    fixture = TestBed.createComponent(RioFormGroupTestController);
    fixture.detectChanges();
  });

  it('should inject the component', inject([RioFormGroupComponent],
    (component: RioFormGroupComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', async(inject([], () => {
    fixture.whenStable().then(() => {
      fixture.autoDetectChanges();
      let query = fixture.debugElement
        .query(By.directive(RioFormGroupComponent));
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

