/* tslint:disable: member-ordering forin */
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'jhi-wiki-smart',
  styleUrls: ['./wiki.scss'],
  template: `
    <h1>Smarter Wikipedia Demo</h1>
    <p>Search when typing stops</p>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>`
})
export class WikiSmartComponent implements OnInit {
  items: Observable<string[]>;

  constructor(private wikipediaService: WikipediaService) { }

  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term); }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikipediaService.search(term));
  }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
