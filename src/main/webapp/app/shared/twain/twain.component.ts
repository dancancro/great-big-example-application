import { Component, OnInit } from '@angular/core';

import { TwainService } from './twain.service';

@Component({
    selector: 'jhi-twain-quote',
    template: '<p class="twain"><i>{{quote}}</i></p>'
})
export class TwainComponent implements OnInit {
    intervalId: number;
    quote = '...';
    constructor(private twainService: TwainService) { }

    ngOnInit(): void {
        this.twainService.getQuote().then((quote) => this.quote = quote);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
