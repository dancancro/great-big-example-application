import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IRebuttal } from 'app/shared/model/rebuttal.model';

type EntityResponseType = HttpResponse<IRebuttal>;
type EntityArrayResponseType = HttpResponse<IRebuttal[]>;

@Injectable({ providedIn: 'root' })
export class RebuttalService {
    private resourceUrl = SERVER_API_URL + 'api/rebuttals';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/rebuttals';

    constructor(private http: HttpClient) {}

    create(rebuttal: IRebuttal): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(rebuttal);
        return this.http
            .post<IRebuttal>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(rebuttal: IRebuttal): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(rebuttal);
        return this.http
            .put<IRebuttal>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IRebuttal>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IRebuttal[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IRebuttal[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    private convertDateFromClient(rebuttal: IRebuttal): IRebuttal {
        const copy: IRebuttal = Object.assign({}, rebuttal, {
            date: rebuttal.date != null && rebuttal.date.isValid() ? rebuttal.date.toJSON() : null,
            expires: rebuttal.expires != null && rebuttal.expires.isValid() ? rebuttal.expires.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.date = res.body.date != null ? moment(res.body.date) : null;
        res.body.expires = res.body.expires != null ? moment(res.body.expires) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((rebuttal: IRebuttal) => {
            rebuttal.date = rebuttal.date != null ? moment(rebuttal.date) : null;
            rebuttal.expires = rebuttal.expires != null ? moment(rebuttal.expires) : null;
        });
        return res;
    }
}
