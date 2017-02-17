export class Hero {
  constructor(public id = 0, public name = '') { }
  clone() { return new Hero(this.id, this.name); }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/