import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IHero } from 'app/shared/model/hero.model';

type EntityResponseType = HttpResponse<IHero>;
type EntityArrayResponseType = HttpResponse<IHero[]>;

@Injectable({ providedIn: 'root' })
export class HeroService {
    private resourceUrl = SERVER_API_URL + 'api/heroes';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/heroes';

    constructor(private http: HttpClient) {}

    create(hero: IHero): Observable<EntityResponseType> {
        return this.http.post<IHero>(this.resourceUrl, hero, { observe: 'response' });
    }

    update(hero: IHero): Observable<EntityResponseType> {
        return this.http.put<IHero>(this.resourceUrl, hero, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IHero>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IHero[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IHero[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
