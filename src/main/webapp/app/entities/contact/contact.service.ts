import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Contact } from './contact.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Contact>;

@Injectable()
export class ContactService {

    private resourceUrl =  SERVER_API_URL + 'api/contacts';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/contacts';

    constructor(private http: HttpClient) { }

    create(contact: Contact): Observable<EntityResponseType> {
        const copy = this.convert(contact);
        return this.http.post<Contact>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(contact: Contact): Observable<EntityResponseType> {
        const copy = this.convert(contact);
        return this.http.put<Contact>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Contact>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Contact[]>> {
        const options = createRequestOption(req);
        return this.http.get<Contact[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Contact[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Contact[]>> {
        const options = createRequestOption(req);
        return this.http.get<Contact[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Contact[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Contact = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Contact[]>): HttpResponse<Contact[]> {
        const jsonResponse: Contact[] = res.body;
        const body: Contact[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Contact.
     */
    private convertItemFromServer(contact: Contact): Contact {
        const copy: Contact = Object.assign({}, contact);
        return copy;
    }

    /**
     * Convert a Contact to a JSON which can be sent to the server.
     */
    private convert(contact: Contact): Contact {
        const copy: Contact = Object.assign({}, contact);
        return copy;
    }
}
