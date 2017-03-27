import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';

import { environment } from '../../../environments/environment.prod';
import { Claim } from '../store/claim/claim.model';
import { ClaimRebuttal } from '../store/claim-rebuttal/claim-rebuttal.model';
import { Contact } from '../store/contact/contact.model';
import { Crisis } from '../store/crisis/crisis.model';
import { Hero } from '../store/hero/hero.model';
import { Note } from '../store/note/note.model';
import { Rebuttal } from '../store/rebuttal/rebuttal.model';

const BASE_URL = '/api';

@Injectable()
export class DataService {
  private JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(private http: Http) { }

  login(payload) {
    return this.http.post(`${BASE_URL}/auth/login`, payload, this.JSON_HEADER)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEntities(table: string): Observable<any[]> {
    return this.http.get(`${BASE_URL}/${table}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEntity(id: number | string, table: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/${table}/${id}`)
      .map((r: Response) => r.json());
  }

  addOrUpdate(entity: any, table): Observable<any> {
    return this.http.post(`${BASE_URL}/${table}`, this.prepareRecord(entity), this.JSON_HEADER)
      .map(this.extractData)
      .catch(this.handleError);
  }

  prepareRecord(record) {
    delete record.dirty;
    return JSON.stringify(record);
  }

  private extractData(res: Response) {
    // if (res.status < 200 || res.status >= 300) {
    //   throw new Error('Bad response status: ' + res.status);
    // }
    // let body = res.json();
    // return body.data || {};

    let body = res.json();
    return body || {};

  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
