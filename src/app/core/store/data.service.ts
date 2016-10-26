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

@Injectable()
export class DataService {
    result: Object;
    combined: any;
    error: Object;
    // getUrl: string = 'https://script.google.com/macros/s/AKfycbymzGKzgGkVo4kepy9zKIyDlxbnLbp-ivCvj8mVMClmWgr-V-g/exec?json=1';
    // getUrl: string = '/objections.json';  // faster. use for dev
    // postUrl: string = 'https://script.google.com/macros/s/AKfycbymzGKzgGkVo4kepy9zKIyDlxbnLbp-ivCvj8mVMClmWgr-V-g/exec';
    postUrl: string = '/api/list';
    // getUrl: string = environment.production ? 'https://script.google.com/macros/s/AKfycbymzGKzgGkVo4kepy9zKIyDlxbnLbp-ivCvj8mVMClmWgr-V-g/exec?json=1' : '/objections.json';
    getUrl: string = environment.production ? 'https://script.google.com/macros/s/AKfycbzRNPSnpecG8pjxXMkrV3yb3ezw2jYXz7nNwTPeOJH4tbPyOoE/exec?table=' : '/objections.json';
    private API_ROOT: String = 'http://localhost:3000';
    private JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


    constructor(private http: Http) {
    }

    getClaims(): Observable<Claim[]> {
      return this.http.get(this.getUrl + 'claims') 
        .map(response => {
            return response.json();
      });
    }

    getRebuttals(): Observable<Rebuttal[]> {
      return this.http.get(this.getUrl + 'rebuttals') 
        .map(response => {
          return response.json();
        });
    }

    getClaimRebuttals(): Observable<ClaimRebuttal[]> {
      return this.http.get(this.getUrl + 'claim-rebuttals') 
        .map(response => {
          return response.json();
        });
    }

    getNotes(): Observable<any> {
      return this.http.get(`${this.API_ROOT}/notes`)
        .map((response: Response) => response.json());
    }

    addOrUpdateNote(note: Note): Observable<Note> {
      return this.http.post(`${this.API_ROOT}/notes`, JSON.stringify(note), this.JSON_HEADER)
        .map((response: Response) => response.json());
    }

    getContacts(): Observable<any> {
      return this.http.get(`${this.API_ROOT}/contacts`)
        .map((response: Response) => response.json());
    }

    addOrUpdateContact(contact: Contact): Observable<Contact> {
      return this.http.post(`${this.API_ROOT}/contacts`, JSON.stringify(contact), this.JSON_HEADER)
        .map((response: Response) => response.json());
    }

    getCrises(): Observable<any> {
      return this.http.get(`${this.API_ROOT}/crises`)
        .map((response: Response) => response.json());
    }

    addOrUpdateCrisis(crisis: Crisis): Observable<Crisis> {
      return this.http.post(`${this.API_ROOT}/crises`, JSON.stringify(crisis), this.JSON_HEADER)
        .map((response: Response) => response.json());
    }

    getHeroes(): Observable<any> {
      return this.http.get(`${this.API_ROOT}/heroes`)
        .map((response: Response) => response.json());
    }

    addOrUpdateHero(hero: Hero): Observable<Hero> {
      return this.http.post(`${this.API_ROOT}/heroes`, JSON.stringify(hero), this.JSON_HEADER)
        .map((response: Response) => response.json());
    }

    login(payload) {
      return this.http.post(`${this.API_ROOT}/auth/login`, payload)
        .map((response: Response) => response.json());
    }
}
