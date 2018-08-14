import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';

type EntityResponseType = HttpResponse<IClaimRebuttal>;
type EntityArrayResponseType = HttpResponse<IClaimRebuttal[]>;

@Injectable({ providedIn: 'root' })
export class ClaimRebuttalService {
    private resourceUrl = SERVER_API_URL + 'api/claim-rebuttals';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/claim-rebuttals';

    constructor(private http: HttpClient) {}

    create(claimRebuttal: IClaimRebuttal): Observable<EntityResponseType> {
        return this.http.post<IClaimRebuttal>(this.resourceUrl, claimRebuttal, { observe: 'response' });
    }

    update(claimRebuttal: IClaimRebuttal): Observable<EntityResponseType> {
        return this.http.put<IClaimRebuttal>(this.resourceUrl, claimRebuttal, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IClaimRebuttal>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IClaimRebuttal[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IClaimRebuttal[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
