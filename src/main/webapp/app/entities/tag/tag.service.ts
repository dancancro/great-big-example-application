import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Tag } from './tag.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Tag>;

@Injectable()
export class TagService {

    private resourceUrl =  SERVER_API_URL + 'api/tags';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/tags';

    constructor(private http: HttpClient) { }

    create(tag: Tag): Observable<EntityResponseType> {
        const copy = this.convert(tag);
        return this.http.post<Tag>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(tag: Tag): Observable<EntityResponseType> {
        const copy = this.convert(tag);
        return this.http.put<Tag>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Tag>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Tag[]>> {
        const options = createRequestOption(req);
        return this.http.get<Tag[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Tag[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Tag[]>> {
        const options = createRequestOption(req);
        return this.http.get<Tag[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Tag[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Tag = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Tag[]>): HttpResponse<Tag[]> {
        const jsonResponse: Tag[] = res.body;
        const body: Tag[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Tag.
     */
    private convertItemFromServer(tag: Tag): Tag {
        const copy: Tag = Object.assign({}, tag);
        return copy;
    }

    /**
     * Convert a Tag to a JSON which can be sent to the server.
     */
    private convert(tag: Tag): Tag {
        const copy: Tag = Object.assign({}, tag);
        return copy;
    }
}
