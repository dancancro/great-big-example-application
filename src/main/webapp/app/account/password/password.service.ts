import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PasswordService {

    constructor(private http: HttpClient) { }

    save(newPassword: string): Observable<any> {
        return this.http.post('api/account/change_password', newPassword);
    }
}
