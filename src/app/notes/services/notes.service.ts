import { Observable } from 'rxjs/Observable';
import { Note } from '../note.model'

export interface NotesService {
    getNotes(): Observable<Note[]>;
    addNote(noteText: string): void;
    changeNoteText(newText: string, note: Note): void;
    initialise(): void;
}