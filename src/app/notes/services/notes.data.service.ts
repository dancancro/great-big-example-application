import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

import { Note } from '../../app.model';

@Injectable()
export class NotesDataService {
    private API_ROOT: String = 'http://localhost:3000';
    private JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

    constructor(public http: Http) { }

    getNotes(): Observable<Array<Note>> {
      return this.http.get(`${this.API_ROOT}/notes`)
        .map((response: Response) => response.json());
    }

    addOrUpdateNote(note: Note): Observable<Note> {
      return this.http.post(`${this.API_ROOT}/notes`, JSON.stringify(note), this.JSON_HEADER)
        .map((response: Response) => response.json());
    }
}
