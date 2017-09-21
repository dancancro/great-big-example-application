import { Component, OnInit } from '@angular/core';
import { Principal } from '../../shared/auth/principal.service';

@Component({
    selector: 'jhi-welcome',
    template: '<h3 class="welcome" ><i>{{welcome}}</i></h3>'
})
export class WelcomeComponent implements OnInit {
    welcome = '-- not initialized yet --';
    constructor(private principal: Principal) { }

    ngOnInit(): void {
        this.welcome = this.principal.isAuthenticated() ?
            'Welcome, ' + this.principal.identity.name :
            'Please log in.';
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
