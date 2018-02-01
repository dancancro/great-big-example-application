import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get('api/account').map((res: Response) => res.json());
    }

    save(account: any): Observable<Response> {
        return <Observable<Response>>this.http.post('api/account', account);
    }
}
