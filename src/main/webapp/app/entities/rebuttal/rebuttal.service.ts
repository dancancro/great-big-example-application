import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JhiDateUtils } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class RebuttalService {

    private resourceUrl = 'api/rebuttals';
    private resourceSearchUrl = 'api/_search/rebuttals';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(rebuttal: Rebuttal): Observable<Rebuttal> {
        const copy = this.convert(rebuttal);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(rebuttal: Rebuttal): Observable<Rebuttal> {
        const copy = this.convert(rebuttal);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<Rebuttal> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
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
        for (let i = 0; i < jsonResponse.length; i++) {
            this.convertItemFromServer(jsonResponse[i]);
        }
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convertItemFromServer(entity: any) {
        entity.date = this.dateUtils
            .convertDateTimeFromServer(entity.date);
        entity.expires = this.dateUtils
            .convertDateTimeFromServer(entity.expires);
    }

    private convert(rebuttal: Rebuttal): Rebuttal {
        const copy: Rebuttal = Object.assign({}, rebuttal);

        copy.date = this.dateUtils.toDate(rebuttal.date);

        copy.expires = this.dateUtils.toDate(rebuttal.expires);
        return copy;
    }
}
