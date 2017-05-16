import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
    selector: 'jhi-wiki',
    styleUrls: ['wiki.scss'],
    template: `
    <h1>Wikipedia Demo</h1>
    <p>Search after each keystroke</p>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>`
})
export class WikiComponent {
    items: Observable<string[]>;

    constructor(private wikipediaService: WikipediaService) { }

    search(term: string) {
        this.items = this.wikipediaService.search(term);
    }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
