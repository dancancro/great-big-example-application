import { Observable } from 'rxjs/Observable';
import { Note } from '../note.model'

export interface NotesService {
    getNotes(): Observable<Note[]>;
    addNote(text: string, colour: string, left: number, top: number): void;
    changeNoteText(text: string, note: Note): void;
    changeNotePosition(left: number, top: number, note: Note): void;
    initialise(): void;
}