import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICrisis } from 'app/shared/model/crisis.model';

type EntityResponseType = HttpResponse<ICrisis>;
type EntityArrayResponseType = HttpResponse<ICrisis[]>;

@Injectable({ providedIn: 'root' })
export class CrisisService {
    private resourceUrl = SERVER_API_URL + 'api/crises';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/crises';

    constructor(private http: HttpClient) {}

    create(crisis: ICrisis): Observable<EntityResponseType> {
        return this.http.post<ICrisis>(this.resourceUrl, crisis, { observe: 'response' });
    }

    update(crisis: ICrisis): Observable<EntityResponseType> {
        return this.http.put<ICrisis>(this.resourceUrl, crisis, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICrisis>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICrisis[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICrisis[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
