import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class HeroService {

    private resourceUrl = 'api/heroes';
    private resourceSearchUrl = 'api/_search/heroes';

    constructor(private http: Http) { }

    create(hero: Hero): Observable<Hero> {
        const copy = this.convert(hero);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(hero: Hero): Observable<Hero> {
        const copy = this.convert(hero);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Hero> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
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
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(hero: Hero): Hero {
        const copy: Hero = Object.assign({}, hero);
        return copy;
    }
}
