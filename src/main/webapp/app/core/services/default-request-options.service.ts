import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();

    // Set the default 'Content-Type' header
    this.headers.set('Content-Type', 'application/json');
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
