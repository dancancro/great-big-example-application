import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JhiDateUtils } from 'ng-jhipster';

import { Message } from './message.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MessageService {

    private resourceUrl = 'api/messages';
    private resourceSearchUrl = 'api/_search/messages';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(message: Message): Observable<Message> {
        const copy = this.convert(message);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(message: Message): Observable<Message> {
        const copy = this.convert(message);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<Message> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            this.convertItemFromServer(jsonResponse[i]);
        }
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convertItemFromServer(entity: any) {
        entity.createdAt = this.dateUtils
            .convertDateTimeFromServer(entity.createdAt);
        entity.updatedAt = this.dateUtils
            .convertDateTimeFromServer(entity.updatedAt);
    }

    private convert(message: Message): Message {
        const copy: Message = Object.assign({}, message);

        copy.createdAt = this.dateUtils.toDate(message.createdAt);

        copy.updatedAt = this.dateUtils.toDate(message.updatedAt);
        return copy;
    }
}
