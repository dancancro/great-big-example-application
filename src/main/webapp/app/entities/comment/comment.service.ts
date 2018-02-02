import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Comment } from './comment.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Comment>;

@Injectable()
export class CommentService {

    private resourceUrl =  SERVER_API_URL + 'api/comments';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/comments';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(comment: Comment): Observable<EntityResponseType> {
        const copy = this.convert(comment);
        return this.http.post<Comment>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(comment: Comment): Observable<EntityResponseType> {
        const copy = this.convert(comment);
        return this.http.put<Comment>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Comment>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Comment[]>> {
        const options = createRequestOption(req);
        return this.http.get<Comment[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Comment[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Comment[]>> {
        const options = createRequestOption(req);
        return this.http.get<Comment[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Comment[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Comment = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Comment[]>): HttpResponse<Comment[]> {
        const jsonResponse: Comment[] = res.body;
        const body: Comment[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Comment.
     */
    private convertItemFromServer(comment: Comment): Comment {
        const copy: Comment = Object.assign({}, comment);
        copy.createdAt = this.dateUtils
            .convertDateTimeFromServer(comment.createdAt);
        copy.updatedAt = this.dateUtils
            .convertDateTimeFromServer(comment.updatedAt);
        return copy;
    }

    /**
     * Convert a Comment to a JSON which can be sent to the server.
     */
    private convert(comment: Comment): Comment {
        const copy: Comment = Object.assign({}, comment);

        copy.createdAt = this.dateUtils.toDate(comment.createdAt);

        copy.updatedAt = this.dateUtils.toDate(comment.updatedAt);
        return copy;
    }
}
