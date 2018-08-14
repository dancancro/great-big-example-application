import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAuthor } from 'app/shared/model/author.model';

type EntityResponseType = HttpResponse<IAuthor>;
type EntityArrayResponseType = HttpResponse<IAuthor[]>;

@Injectable({ providedIn: 'root' })
export class AuthorService {
    private resourceUrl = SERVER_API_URL + 'api/authors';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/authors';

    constructor(private http: HttpClient) {}

    create(author: IAuthor): Observable<EntityResponseType> {
        return this.http.post<IAuthor>(this.resourceUrl, author, { observe: 'response' });
    }

    update(author: IAuthor): Observable<EntityResponseType> {
        return this.http.put<IAuthor>(this.resourceUrl, author, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IAuthor>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IAuthor[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IAuthor[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
