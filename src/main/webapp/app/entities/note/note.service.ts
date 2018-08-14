import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Note } from './note.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Note>;

@Injectable()
export class NoteService {

    private resourceUrl =  SERVER_API_URL + 'api/notes';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/notes';

    constructor(private http: HttpClient) { }

    create(note: Note): Observable<EntityResponseType> {
        const copy = this.convert(note);
        return this.http.post<Note>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(note: Note): Observable<EntityResponseType> {
        const copy = this.convert(note);
        return this.http.put<Note>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Note>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Note[]>> {
        const options = createRequestOption(req);
        return this.http.get<Note[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Note[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<Note[]>> {
        const options = createRequestOption(req);
        return this.http.get<Note[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Note[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Note = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Note[]>): HttpResponse<Note[]> {
        const jsonResponse: Note[] = res.body;
        const body: Note[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Note.
     */
    private convertItemFromServer(note: Note): Note {
        const copy: Note = Object.assign({}, note);
        return copy;
    }

    /**
     * Convert a Note to a JSON which can be sent to the server.
     */
    private convert(note: Note): Note {
        const copy: Note = Object.assign({}, note);
        return copy;
    }
}
