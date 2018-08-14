import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Talk } from './talk.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Talk>;

@Injectable()
export class TalkService {

    private resourceUrl =  SERVER_API_URL + 'api/talks';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/talks';

    constructor(private http: HttpClient) { }

    create(talk: Talk): Observable<EntityResponseType> {
        const copy = this.convert(talk);
        return this.http.post<Talk>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(talk: Talk): Observable<EntityResponseType> {
        const copy = this.convert(talk);
        return this.http.put<Talk>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Talk>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Talk[]>> {
        const options = createRequestOption(req);
        return this.http.get<Talk[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Talk[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Talk[]>> {
        const options = createRequestOption(req);
        return this.http.get<Talk[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Talk[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Talk = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Talk[]>): HttpResponse<Talk[]> {
        const jsonResponse: Talk[] = res.body;
        const body: Talk[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Talk.
     */
    private convertItemFromServer(talk: Talk): Talk {
        const copy: Talk = Object.assign({}, talk);
        return copy;
    }

    /**
     * Convert a Talk to a JSON which can be sent to the server.
     */
    private convert(talk: Talk): Talk {
        const copy: Talk = Object.assign({}, talk);
        return copy;
    }
}
