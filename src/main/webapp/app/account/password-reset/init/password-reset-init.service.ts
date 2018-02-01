import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PasswordResetInitService {

  constructor(private http: HttpClient) { }

  save(mail: string): Observable<any> {
    return this.http.post('api/account/reset_password/init', mail);
  }
}
