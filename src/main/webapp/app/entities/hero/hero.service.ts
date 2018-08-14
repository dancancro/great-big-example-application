import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Hero } from './hero.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Hero>;

@Injectable()
export class HeroService {

    private resourceUrl =  SERVER_API_URL + 'api/heroes';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/heroes';

    constructor(private http: HttpClient) { }

    create(hero: Hero): Observable<EntityResponseType> {
        const copy = this.convert(hero);
        return this.http.post<Hero>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(hero: Hero): Observable<EntityResponseType> {
        const copy = this.convert(hero);
        return this.http.put<Hero>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Hero>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Hero[]>> {
        const options = createRequestOption(req);
        return this.http.get<Hero[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Hero[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Hero[]>> {
        const options = createRequestOption(req);
        return this.http.get<Hero[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Hero[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Hero = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Hero[]>): HttpResponse<Hero[]> {
        const jsonResponse: Hero[] = res.body;
        const body: Hero[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Hero.
     */
    private convertItemFromServer(hero: Hero): Hero {
        const copy: Hero = Object.assign({}, hero);
        return copy;
    }

    /**
     * Convert a Hero to a JSON which can be sent to the server.
     */
    private convert(hero: Hero): Hero {
        const copy: Hero = Object.assign({}, hero);
        return copy;
    }
}
