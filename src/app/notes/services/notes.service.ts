import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Note } from '../../index'

@Injectable()
export class NotesService {
    notes: Note[] = [];
    notesSource: Subject<Note[]> = new Subject<Note[]>();

    getNotes(): Observable<Note[]>{
        return this.notesSource;
    }
    addNote(text: string, colour: string, left: number, top: number): void{
        this.notes.push({text, colour, left, top});
        this.notesSource.next(this.notes);
    }
    changeNoteText(text: string, note: Note): void{
        this.notes.forEach((anote: Note) =>{
            if(anote==note){
                anote.text = text;
            }
        });

        this.notesSource.next(this.notes);
    }
    changeNotePosition(left: number, top: number, note: Note): void{
        this.notes.forEach((anote: Note) =>{
            if(anote==note){
                anote.left = left;
                anote.top = top;
            }
        });

        this.notesSource.next(this.notes);
    }
    
    initialise(): void{

    }
}