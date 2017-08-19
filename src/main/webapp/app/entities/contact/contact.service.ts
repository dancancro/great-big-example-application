import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ContactService {

    private resourceUrl = 'api/contacts';
    private resourceSearchUrl = 'api/_search/contacts';

    constructor(private http: Http) { }

    create(contact: Contact): Observable<Contact> {
        const copy = this.convert(contact);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(contact: Contact): Observable<Contact> {
        const copy = this.convert(contact);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Contact> {
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

    private convert(contact: Contact): Contact {
        const copy: Contact = Object.assign({}, contact);
        return copy;
    }
}
