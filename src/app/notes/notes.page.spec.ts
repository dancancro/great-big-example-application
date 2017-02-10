import { TestBed } from '@angular/core/testing';
import { inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AddButtonComponent } from './add-button/add-button.component';
import { reducer } from '../core/store/note/note.reducer';
import { Draggable } from '../shared/draggable/draggable.directive';

// Object under test
import { NotesPage } from './notes.page';
import { NoteComponent } from './note/note.component';

describe('Component: Notes', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotesPage,
        NoteComponent,
        AddButtonComponent,
        Draggable,
        NotesComponentTestController
      ],
      providers: [
        provideStore({ reducer }, { notes: [] }),
        NotesPage]
    });
  });

  it('should inject the component', inject([NotesPage],
    (component: NotesPage) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component',
    async(() => {
      TestBed
        .compileComponents()
        .then(() => {
          let fixture = TestBed.createComponent(NotesComponentTestController);
          let query = fixture.debugElement.query(By.directive(NotesPage));
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

