import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JhiMetricsService {

    constructor(private http: HttpClient) { }

    getMetrics(): Observable<any> {
        return this.http.get('management/metrics').map((res: Response) => res.json());
    }

    threadDump(): Observable<any> {
        return this.http.get('management/dump').map((res: Response) => res.json());
    }
}
