import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isLoggedIn = true;
  user = {name: 'Sam Spade'};
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/