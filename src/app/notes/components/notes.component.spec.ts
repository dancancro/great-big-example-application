import { TestBed } from '@angular/core/testing';
import { inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AddButtonComponent } from './add-button.component';
import { NoteComponent } from './note.component';
import { NotesService } from '../services/notes.service';
import { notes } from '../reducers/notes.reducer';
import { Draggable } from '../../shared';

// Object under test
import { NotesComponent } from './notes.component';

describe('Component: Notes', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
          NotesComponent,
          NoteComponent,
          AddButtonComponent,
          Draggable,
          NotesComponentTestController
        ],
        providers: [
          provideStore({notes}, {notes: []}),
          NotesService,
          NotesComponent]
    });
  });

  it('should inject the component', inject([NotesComponent],
      (component: NotesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(NotesComponentTestController);
            let query = fixture.debugElement.query(By.directive(NotesComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
          });
      }));
  });

@Component({
  selector: 'notes-test',
  template: `
    <app-notes></app-notes>
  `
})
class NotesComponentTestController {
}

