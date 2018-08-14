import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITalk } from 'app/shared/model/talk.model';

type EntityResponseType = HttpResponse<ITalk>;
type EntityArrayResponseType = HttpResponse<ITalk[]>;

@Injectable({ providedIn: 'root' })
export class TalkService {
    private resourceUrl = SERVER_API_URL + 'api/talks';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/talks';

    constructor(private http: HttpClient) {}

    create(talk: ITalk): Observable<EntityResponseType> {
        return this.http.post<ITalk>(this.resourceUrl, talk, { observe: 'response' });
    }

    update(talk: ITalk): Observable<EntityResponseType> {
        return this.http.put<ITalk>(this.resourceUrl, talk, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITalk>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITalk[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITalk[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
