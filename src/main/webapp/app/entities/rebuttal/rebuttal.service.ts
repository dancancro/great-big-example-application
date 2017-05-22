import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Rebuttal } from './rebuttal.model';
import { DateUtils } from 'ng-jhipster';

@Injectable()
export class RebuttalService {

    private resourceUrl = 'api/rebuttals';
    private resourceSearchUrl = 'api/_search/rebuttals';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(rebuttal: Rebuttal): Observable<Rebuttal> {
        const copy = this.convert(rebuttal);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(rebuttal: Rebuttal): Observable<Rebuttal> {
        const copy = this.convert(rebuttal);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Rebuttal> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            jsonResponse.date = this.dateUtils
                .convertDateTimeFromServer(jsonResponse.date);
            jsonResponse.expires = this.dateUtils
                .convertDateTimeFromServer(jsonResponse.expires);
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
            jsonResponse[i].date = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].date);
            jsonResponse[i].expires = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].expires);
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

    private convert(rebuttal: Rebuttal): Rebuttal {
        const copy: Rebuttal = Object.assign({}, rebuttal);

        copy.date = this.dateUtils.toDate(rebuttal.date);

        copy.expires = this.dateUtils.toDate(rebuttal.expires);
        return copy;
    }
}
