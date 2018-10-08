import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IClaim } from 'app/shared/model/claim.model';

type EntityResponseType = HttpResponse<IClaim>;
type EntityArrayResponseType = HttpResponse<IClaim[]>;

@Injectable({ providedIn: 'root' })
export class ClaimService {
    private resourceUrl = SERVER_API_URL + 'api/claims';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/claims';

    constructor(private http: HttpClient) {}

    create(claim: IClaim): Observable<EntityResponseType> {
        return this.http.post<IClaim>(this.resourceUrl, claim, { observe: 'response' });
    }

    update(claim: IClaim): Observable<EntityResponseType> {
        return this.http.put<IClaim>(this.resourceUrl, claim, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IClaim>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IClaim[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IClaim[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
