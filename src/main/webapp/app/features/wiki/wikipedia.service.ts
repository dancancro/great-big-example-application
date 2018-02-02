import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class WikipediaService {
    constructor(private http: HttpClient) { }

    search(term: string) {

        const wikiUrl = 'https://en.wikipedia.org/w/api.php';

        const params = new HttpParams()
            .set('search', term) // the user's search value
            .set('action', 'opensearch')
            .set('format', 'json')
            .set('callback', 'JSONP_CALLBACK');

        // TODO: Add error handling
        return this.http
            .get(wikiUrl, { params })
            // .map((response) => <string[]>response.json()[1]);
            .map((response) => <string[]>response);
    }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
