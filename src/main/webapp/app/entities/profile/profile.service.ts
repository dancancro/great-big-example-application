import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Profile } from './profile.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Profile>;

@Injectable()
export class ProfileService {

    private resourceUrl =  SERVER_API_URL + 'api/profiles';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/profiles';

    constructor(private http: HttpClient) { }

    create(profile: Profile): Observable<EntityResponseType> {
        const copy = this.convert(profile);
        return this.http.post<Profile>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(profile: Profile): Observable<EntityResponseType> {
        const copy = this.convert(profile);
        return this.http.put<Profile>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Profile>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Profile[]>> {
        const options = createRequestOption(req);
        return this.http.get<Profile[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Profile[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Profile[]>> {
        const options = createRequestOption(req);
        return this.http.get<Profile[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Profile[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Profile = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Profile[]>): HttpResponse<Profile[]> {
        const jsonResponse: Profile[] = res.body;
        const body: Profile[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Profile.
     */
    private convertItemFromServer(profile: Profile): Profile {
        const copy: Profile = Object.assign({}, profile);
        return copy;
    }

    /**
     * Convert a Profile to a JSON which can be sent to the server.
     */
    private convert(profile: Profile): Profile {
        const copy: Profile = Object.assign({}, profile);
        return copy;
    }
}
