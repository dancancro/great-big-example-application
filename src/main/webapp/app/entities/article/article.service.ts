import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Article } from './article.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Article>;

@Injectable()
export class ArticleService {

    private resourceUrl =  SERVER_API_URL + 'api/articles';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/articles';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(article: Article): Observable<EntityResponseType> {
        const copy = this.convert(article);
        return this.http.post<Article>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(article: Article): Observable<EntityResponseType> {
        const copy = this.convert(article);
        return this.http.put<Article>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Article>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Article[]>> {
        const options = createRequestOption(req);
        return this.http.get<Article[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Article[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Article[]>> {
        const options = createRequestOption(req);
        return this.http.get<Article[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Article[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Article = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Article[]>): HttpResponse<Article[]> {
        const jsonResponse: Article[] = res.body;
        const body: Article[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Article.
     */
    private convertItemFromServer(article: Article): Article {
        const copy: Article = Object.assign({}, article);
        copy.createdAt = this.dateUtils
            .convertDateTimeFromServer(article.createdAt);
        copy.updatedAt = this.dateUtils
            .convertDateTimeFromServer(article.updatedAt);
        return copy;
    }

    /**
     * Convert a Article to a JSON which can be sent to the server.
     */
    private convert(article: Article): Article {
        const copy: Article = Object.assign({}, article);

        copy.createdAt = this.dateUtils.toDate(article.createdAt);

        copy.updatedAt = this.dateUtils.toDate(article.updatedAt);
        return copy;
    }
}
