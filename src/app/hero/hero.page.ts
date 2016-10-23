// Exact copy except import UserService from core
import { Component }   from '@angular/core';

import { HeroService } from './hero.service';
import { UserService } from '../core/user/user.service';

@Component({
  template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ HeroService ]
})
export class HeroPage {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/