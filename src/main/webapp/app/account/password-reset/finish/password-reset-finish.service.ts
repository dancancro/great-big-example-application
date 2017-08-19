import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PasswordResetFinishService {

    constructor(private http: Http) {}

    save(keyAndPassword: any): Observable<any> {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    }
}
