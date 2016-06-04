import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/mergeMap';

import { Note } from '../note.model'
import { AppState } from '../note.model';
import { NotesService } from './notes.service';
import { NotesDataService } from './notes.data.service';

@Injectable()
export class NotesServiceHttpOnly implements NotesService {
  notesDataService: NotesDataService;

  notes: Note[] = [];
  notesSource: Subject<Note[]> = new Subject<Note[]>();

  constructor(notesDataService: NotesDataService) {
    this.notesDataService = notesDataService;
  }

  initialise(): void {
    this.notesDataService.getNotes().subscribe(notes => {
      this.notes = [...this.notes, ...notes];
      this.notesSource.next(this.notes)
    });
  }
  
  getNotes(): Observable<Note[]> {
    return this.notesSource;
  }

  addNote(text: string): void {
    this.notesDataService.addNote({ text: text, colour: "red" }).subscribe(note => {
      this.notes = [...this.notes, note];
      this.notesSource.next(this.notes)
    });
  }

  changeNoteText(text: string, note: Note): void {
    this.notesDataService.updateNote(Object.assign({}, note, {text: text})).subscribe(updatedNote => {
      this.notes = this.notes.map(existingNote => {
        if(existingNote.id === updatedNote.id){
          return updatedNote;
        }else{
          return existingNote;
        }
      });
      
      this.notesSource.next(this.notes);   
    });
  }

}