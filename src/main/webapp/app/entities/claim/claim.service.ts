import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Claim } from './claim.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ClaimService {

    private resourceUrl = 'api/claims';
    private resourceSearchUrl = 'api/_search/claims';

    constructor(private http: Http) { }

    create(claim: Claim): Observable<Claim> {
        const copy = this.convert(claim);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(claim: Claim): Observable<Claim> {
        const copy = this.convert(claim);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Claim> {
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

    private convert(claim: Claim): Claim {
        const copy: Claim = Object.assign({}, claim);
        return copy;
    }
}
