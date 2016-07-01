import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Note } from '../../index'

import 'node-uuid';
declare let uuid; //this is a hack stop Typescript compilation problems when addressing the globally available uuid interface

@Injectable()
export class NotesService {
    notes: Note[] = [];
    notesSource: Subject<Note[]> = new Subject<Note[]>();

    getNotes(): Observable<Note[]>{
        return this.notesSource;
    }
    addNote(text: string, colour: string, left: number, top: number): void{
        this.notes = [...this.notes, {text, colour, left, top, id:uuid.v1()}]
        this.notesSource.next(this.notes);
    }
    changeNoteText(text: string, note: Note): void{
        this.notes = this.notes.map(_note => {
        if(_note.id === note.id){
            return Object.assign({}, _note, {text: text})
        } else {
            return _note;
        }
        });
        
        this.notesSource.next(this.notes);
    }
    changeNotePosition(left: number, top: number, note: Note): void{
        this.notes = this.notes.map(_note => {
        if(_note.id === note.id){
            return Object.assign({}, _note, {left: left, top: top})
        } else {
            return _note;
        }
        });

        this.notesSource.next(this.notes);
    }
    
    initialise(): void{

    }
}