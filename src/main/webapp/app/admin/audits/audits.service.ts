import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuditsService {
    constructor(private http: HttpClient) { }

    query(req: any): Observable<Response> {
        const params: HttpParams = new HttpParams()
            .set('fromDate', req.fromDate)
            .set('toDate', req.toDate)
            .set('page', req.page)
            .set('size', req.size)
            .set('sort', req.sort);

        const options = {
            search: params
        };

        return this.http.get('management/audits', options);
    }
}
