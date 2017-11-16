import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PasswordResetFinishService {

  constructor(private http: HttpClient) { }

  save(keyAndPassword: any): Observable<any> {
    return this.http.post('api/account/reset_password/finish', keyAndPassword);
  }
}
