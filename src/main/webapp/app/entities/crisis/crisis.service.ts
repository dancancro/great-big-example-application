import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Crisis } from './crisis.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Crisis>;

@Injectable()
export class CrisisService {

    private resourceUrl =  SERVER_API_URL + 'api/crises';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/crises';

    constructor(private http: HttpClient) { }

    create(crisis: Crisis): Observable<EntityResponseType> {
        const copy = this.convert(crisis);
        return this.http.post<Crisis>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(crisis: Crisis): Observable<EntityResponseType> {
        const copy = this.convert(crisis);
        return this.http.put<Crisis>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Crisis>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Crisis[]>> {
        const options = createRequestOption(req);
        return this.http.get<Crisis[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Crisis[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Crisis[]>> {
        const options = createRequestOption(req);
        return this.http.get<Crisis[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Crisis[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Crisis = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Crisis[]>): HttpResponse<Crisis[]> {
        const jsonResponse: Crisis[] = res.body;
        const body: Crisis[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Crisis.
     */
    private convertItemFromServer(crisis: Crisis): Crisis {
        const copy: Crisis = Object.assign({}, crisis);
        return copy;
    }

    /**
     * Convert a Crisis to a JSON which can be sent to the server.
     */
    private convert(crisis: Crisis): Crisis {
        const copy: Crisis = Object.assign({}, crisis);
        return copy;
    }
}
