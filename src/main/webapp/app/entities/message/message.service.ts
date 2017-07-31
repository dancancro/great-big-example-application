import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Message } from './message.model';
import { DateUtils } from 'ng-jhipster';

@Injectable()
export class MessageService {

    private resourceUrl = 'api/messages';
    private resourceSearchUrl = 'api/_search/messages';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(message: Message): Observable<Message> {
        const copy = this.convert(message);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(message: Message): Observable<Message> {
        const copy = this.convert(message);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Message> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            jsonResponse.createdAt = this.dateUtils
                .convertDateTimeFromServer(jsonResponse.createdAt);
            jsonResponse.updatedAt = this.dateUtils
                .convertDateTimeFromServer(jsonResponse.updatedAt);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<Response> {
        const options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<Response> {
        const options = this.createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    private convertResponse(res: Response): Response {
        const jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].createdAt = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].createdAt);
            jsonResponse[i].updatedAt = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].updatedAt);
        }
        res.json().data = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        const options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            const params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }

    private convert(message: Message): Message {
        const copy: Message = Object.assign({}, message);

        copy.createdAt = this.dateUtils.toDate(message.createdAt);

        copy.updatedAt = this.dateUtils.toDate(message.updatedAt);
        return copy;
    }
}
