import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Rebuttal>;

@Injectable()
export class RebuttalService {

    private resourceUrl =  SERVER_API_URL + 'api/rebuttals';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/rebuttals';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(rebuttal: Rebuttal): Observable<EntityResponseType> {
        const copy = this.convert(rebuttal);
        return this.http.post<Rebuttal>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(rebuttal: Rebuttal): Observable<EntityResponseType> {
        const copy = this.convert(rebuttal);
        return this.http.put<Rebuttal>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Rebuttal>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Rebuttal[]>> {
        const options = createRequestOption(req);
        return this.http.get<Rebuttal[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Rebuttal[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Rebuttal[]>> {
        const options = createRequestOption(req);
        return this.http.get<Rebuttal[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Rebuttal[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Rebuttal = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Rebuttal[]>): HttpResponse<Rebuttal[]> {
        const jsonResponse: Rebuttal[] = res.body;
        const body: Rebuttal[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Rebuttal.
     */
    private convertItemFromServer(rebuttal: Rebuttal): Rebuttal {
        const copy: Rebuttal = Object.assign({}, rebuttal);
        copy.date = this.dateUtils
            .convertDateTimeFromServer(rebuttal.date);
        copy.expires = this.dateUtils
            .convertDateTimeFromServer(rebuttal.expires);
        return copy;
    }

    /**
     * Convert a Rebuttal to a JSON which can be sent to the server.
     */
    private convert(rebuttal: Rebuttal): Rebuttal {
        const copy: Rebuttal = Object.assign({}, rebuttal);

        copy.date = this.dateUtils.toDate(rebuttal.date);

        copy.expires = this.dateUtils.toDate(rebuttal.expires);
        return copy;
    }
}
