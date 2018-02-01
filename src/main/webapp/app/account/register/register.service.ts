import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Register {

  constructor(private http: HttpClient) { }

  save(account: any): Observable<any> {
    return this.http.post('api/register', account);
  }
}
