// Exact copy except import UserService from core
import { Component }   from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../core/user/user.service';
import * as fromRoot from '../core/store/';
import { Store } from '@ngrx/store';

@Component({
  template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `
})
export class HeroPage {
  userName$: Observable<string>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.userName$ = this.store.let(fromRoot.getUserName);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/