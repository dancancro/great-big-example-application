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
import {HTTP_PROVIDERS} from '@angular/http';
import { provideStore, Store } from '@ngrx/store';

import { NotesService } from './notes.service';
import { notes } from './notes.reducer';
import { NotesComponent } from './notes.component';

describe('Component: Notes', () => {
  let builder: TestComponentBuilder;
  
  beforeEachProviders(() => [
    provideStore({notes}, {notes:[]}),
    ...HTTP_PROVIDERS, 
    NotesService, 
    NotesComponent]);
    
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([NotesComponent],
      (component: NotesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NotesComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(NotesComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-notes></app-notes>
  `,
  directives: [NotesComponent]
})
class NotesComponentTestController {
}

