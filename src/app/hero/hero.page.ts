// Exact copy except import UserService from core
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../core/store/user/user.model';
import * as fromRoot from '../core/store/';
import { Store } from '@ngrx/store';

@Component({
  template: `
    <h2>Heroes of {{(user$ | async).fullName()}}</h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['hero.page.css']
})
export class HeroPage {
  user$: Observable<User>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.user$ = this.store.let(fromRoot.getUser);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/