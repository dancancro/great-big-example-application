import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<ClaimRebuttal>;

@Injectable()
export class ClaimRebuttalService {

    private resourceUrl =  SERVER_API_URL + 'api/claim-rebuttals';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/claim-rebuttals';

    constructor(private http: HttpClient) { }

    create(claimRebuttal: ClaimRebuttal): Observable<EntityResponseType> {
        const copy = this.convert(claimRebuttal);
        return this.http.post<ClaimRebuttal>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(claimRebuttal: ClaimRebuttal): Observable<EntityResponseType> {
        const copy = this.convert(claimRebuttal);
        return this.http.put<ClaimRebuttal>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ClaimRebuttal>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<ClaimRebuttal[]>> {
        const options = createRequestOption(req);
        return this.http.get<ClaimRebuttal[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<ClaimRebuttal[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<ClaimRebuttal[]>> {
        const options = createRequestOption(req);
        return this.http.get<ClaimRebuttal[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<ClaimRebuttal[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: ClaimRebuttal = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<ClaimRebuttal[]>): HttpResponse<ClaimRebuttal[]> {
        const jsonResponse: ClaimRebuttal[] = res.body;
        const body: ClaimRebuttal[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to ClaimRebuttal.
     */
    private convertItemFromServer(claimRebuttal: ClaimRebuttal): ClaimRebuttal {
        const copy: ClaimRebuttal = Object.assign({}, claimRebuttal);
        return copy;
    }

    /**
     * Convert a ClaimRebuttal to a JSON which can be sent to the server.
     */
    private convert(claimRebuttal: ClaimRebuttal): ClaimRebuttal {
        const copy: ClaimRebuttal = Object.assign({}, claimRebuttal);
        return copy;
    }
}
