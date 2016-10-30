import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';

import { environment } from '../../../environments/environment.prod';
import { Claim } from './Claim/claim.model';
import { Rebuttal } from './rebuttal/rebuttal.model';
import { ClaimRebuttal } from './claim-rebuttal/claim-rebuttal.model';
import { Note } from './note/note.model';
import { Contact } from './contact/contact.model';
import { Crisis } from './crisis/crisis.model';
import { Hero } from './hero/hero.model';

const BASE_URL = '/api';

@Injectable()
export class DataService {
  postUrl: string = '/api/list';
  getUrl: string = environment.production ? 'https://script.google.com/macros/s/AKfycbzRNPSnpecG8pjxXMkrV3yb3ezw2jYXz7nNwTPeOJH4tbPyOoE/exec?table=' : '/objections.json';

  private JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(private http: Http) { }

  login(payload) {
    return this.http.post(`${BASE_URL}/auth/login`, payload, this.JSON_HEADER)
      .map((response: Response) => response.json());
  }

  getClaims(): Observable<Claim[]> {
    return this.http.get(`${BASE_URL}/claims`)
      .map(response => { return response.json(); });
  }

  getRebuttals(): Observable<Rebuttal[]> {
    return this.http.get(`${BASE_URL}/rebuttals`)
      .map((response: Response) => response.json());
  }

  getClaimRebuttals(): Observable<ClaimRebuttal[]> {
    return this.http.get(`${BASE_URL}/claim-rebuttals`)
      .map((response: Response) => response.json());
  }

  getNotes(): Observable<any> {
    return this.http.get(`${BASE_URL}/notes`)
      .map((response: Response) => response.json());
  }

  addOrUpdateNote(note: Note): Observable<Note> {
    return this.http.post(`${BASE_URL}/note`, JSON.stringify(note), this.JSON_HEADER)
      .map((response: Response) => response.json());
  }

  getContacts(): Observable<any> {
    return this.http.get(`${BASE_URL}/contacts`)
      .map((response: Response) => response.json());
  }

  addOrUpdateContact(contact: Contact): Observable<Contact> {
    return this.http.post(`${BASE_URL}/contact`, JSON.stringify(contact), this.JSON_HEADER)
      .map((response: Response) => response.json());
  }

  getCrises(): Observable<any> {
    return this.http.get(`${BASE_URL}/crises`)
      .map((response: Response) => response.json());
  }

  addOrUpdateCrisis(crisis: Crisis): Observable<Crisis> {
    return this.http.post(`${BASE_URL}/crisis`, JSON.stringify(crisis), this.JSON_HEADER)
      .map((response: Response) => response.json());
  }

  getHeroes(): Observable<any> {
    return this.http.get(`${BASE_URL}/heroes`)
      .map((response: Response) => response.json());
  }

  addOrUpdateHero(hero: Hero): Observable<Hero> {
    return this.http.post(`${BASE_URL}/hero`, JSON.stringify(hero), this.JSON_HEADER)
      .map((response: Response) => response.json());
  }
}
