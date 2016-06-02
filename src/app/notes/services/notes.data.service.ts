import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

import { Note } from '../note.model';

@Injectable()
export class NotesDataService {
    private API_ROOT: String = "http://localhost:3000";
    private JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    
    constructor(public http: Http) { }
    
    getNotes(): Observable<Array<Note>> {
      return this.http.get(`${this.API_ROOT}/notes`)
        .map((response: Response) => response.json());
    }
    
    addNote(note: Note): Observable<Note> {
      return this.http.post(`${this.API_ROOT}/notes`, JSON.stringify(note), this.JSON_HEADER)
        .map((response: Response) => response.json())
    }
    
    updateNote(note: Note): Observable<Note>{
      console.log(`notes.service updating note ${note.id} using path ${this.API_ROOT}/notes/${note.id}`)
      if(note.id){
        return this.http.put(`${this.API_ROOT}/notes/${note.id}`, JSON.stringify(note), this.JSON_HEADER)
          .map((response: Response) => response.json())
      }
    }
    
/*
  createItem(item: Item) {
    this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_ITEM', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateItem(item: Item) {
    this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
  }

  deleteItem(item: Item) {
    this.http.delete(`${BASE_URL}${item.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_ITEM', payload: item }));
  }
*/

}
