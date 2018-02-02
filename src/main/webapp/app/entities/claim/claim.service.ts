import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Claim } from './claim.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Claim>;

@Injectable()
export class ClaimService {

    private resourceUrl = SERVER_API_URL + 'api/claims';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/claims';

    constructor(private http: HttpClient) { }

    create(claim: Claim): Observable<EntityResponseType> {
        const copy = this.convert(claim);
        return this.http.post<Claim>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(claim: Claim): Observable<EntityResponseType> {
        const copy = this.convert(claim);
        return this.http.put<Claim>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Claim>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Claim[]>> {
        const options = createRequestOption(req);
        return this.http.get<Claim[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Claim[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<HttpResponse<Claim[]>> {
        const options = createRequestOption(req);
        return this.http.get<Claim[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Claim[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Claim = this.convertItemFromServer(res.body);
        return res.clone({ body });
    }

    private convertArrayResponse(res: HttpResponse<Claim[]>): HttpResponse<Claim[]> {
        const jsonResponse: Claim[] = res.body;
        const body: Claim[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({ body });
    }

    /**
     * Convert a returned JSON object to Claim.
     */
    private convertItemFromServer(claim: Claim): Claim {
        const copy: Claim = Object.assign({}, claim);
        return copy;
    }

    /**
     * Convert a Claim to a JSON which can be sent to the server.
     */
    private convert(claim: Claim): Claim {
        const copy: Claim = Object.assign({}, claim);
        return copy;
    }
}
