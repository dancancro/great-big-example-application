/*
import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RebuttalComponent } from './rebuttal.component';

describe('Component: Rebuttal', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RebuttalComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([RebuttalComponent],
      (component: RebuttalComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(RebuttalComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(RebuttalComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-rebuttal></app-rebuttal>
  `,
  directives: [RebuttalComponent]
})
class RebuttalComponentTestController {
}

*/
