import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Message } from './message.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Message>;

@Injectable()
export class MessageService {

    private resourceUrl =  SERVER_API_URL + 'api/messages';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/messages';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(message: Message): Observable<EntityResponseType> {
        const copy = this.convert(message);
        return this.http.post<Message>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(message: Message): Observable<EntityResponseType> {
        const copy = this.convert(message);
        return this.http.put<Message>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Message>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Message[]>> {
        const options = createRequestOption(req);
        return this.http.get<Message[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Message[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Message[]>> {
        const options = createRequestOption(req);
        return this.http.get<Message[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Message[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Message = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Message[]>): HttpResponse<Message[]> {
        const jsonResponse: Message[] = res.body;
        const body: Message[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Message.
     */
    private convertItemFromServer(message: Message): Message {
        const copy: Message = Object.assign({}, message);
        copy.createdAt = this.dateUtils
            .convertDateTimeFromServer(message.createdAt);
        copy.updatedAt = this.dateUtils
            .convertDateTimeFromServer(message.updatedAt);
        return copy;
    }

    /**
     * Convert a Message to a JSON which can be sent to the server.
     */
    private convert(message: Message): Message {
        const copy: Message = Object.assign({}, message);

        copy.createdAt = this.dateUtils.toDate(message.createdAt);

        copy.updatedAt = this.dateUtils.toDate(message.updatedAt);
        return copy;
    }
}
