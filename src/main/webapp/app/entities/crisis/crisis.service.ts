import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Crisis } from './crisis.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class CrisisService {

    private resourceUrl = 'api/crises';
    private resourceSearchUrl = 'api/_search/crises';

    constructor(private http: Http) { }

    create(crisis: Crisis): Observable<Crisis> {
        const copy = this.convert(crisis);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(crisis: Crisis): Observable<Crisis> {
        const copy = this.convert(crisis);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Crisis> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(crisis: Crisis): Crisis {
        const copy: Crisis = Object.assign({}, crisis);
        return copy;
    }
}
