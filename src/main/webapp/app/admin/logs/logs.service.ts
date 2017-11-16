import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Log } from './log.model';

@Injectable()
export class LogsService {
    constructor(private http: HttpClient) { }

    changeLevel(log: Log): Observable<Response> {
        return <Observable<Response>>this.http.put('management/logs', log);
    }

    findAll(): Observable<Log[]> {
        return this.http.get('management/logs').map((res: Response) => res.json());
    }
}
