import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Author } from './author.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Author>;

@Injectable()
export class AuthorService {

    private resourceUrl =  SERVER_API_URL + 'api/authors';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/authors';

    constructor(private http: HttpClient) { }

    create(author: Author): Observable<EntityResponseType> {
        const copy = this.convert(author);
        return this.http.post<Author>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(author: Author): Observable<EntityResponseType> {
        const copy = this.convert(author);
        return this.http.put<Author>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Author>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Author[]>> {
        const options = createRequestOption(req);
        return this.http.get<Author[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Author[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Author[]>> {
        const options = createRequestOption(req);
        return this.http.get<Author[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Author[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Author = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Author[]>): HttpResponse<Author[]> {
        const jsonResponse: Author[] = res.body;
        const body: Author[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Author.
     */
    private convertItemFromServer(author: Author): Author {
        const copy: Author = Object.assign({}, author);
        return copy;
    }

    /**
     * Convert a Author to a JSON which can be sent to the server.
     */
    private convert(author: Author): Author {
        const copy: Author = Object.assign({}, author);
        return copy;
    }
}
