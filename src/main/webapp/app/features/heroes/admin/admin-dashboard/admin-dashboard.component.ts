import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SelectivePreloadingStrategy } from '../../../../shared/selective-preloading-strategy';

@Component({
    template: `
    <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async }} TODO:</p>
    <a id="anchor"> TODO:</a>
    <p>Token: {{ token | async }} TODO:</p>

    Preloaded Modules
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
  `
})
export class AdminDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: SelectivePreloadingStrategy
    ) {
        this.modules = preloadStrategy.preloadedModules;
    }

    ngOnInit() {

        // TODO: Think about demonstrating these concepts as they may actually be employed in a real app
        // NavigationExtras
        // Save url for rerouting after login
        //
        // // Capture the session ID if available
        // this.sessionId = this.route
        //   .queryParams
        //   .map((params) => params['session_id'] || 'None');

        // // Capture the fragment if available
        // this.token = this.route
        //   .fragment
        //   .map((fragment) => fragment || 'None');
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
