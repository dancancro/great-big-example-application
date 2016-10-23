import { NgModule }           from '@angular/core';

import { SharedModule }       from '../shared/shared.module';
import { ContactPage }        from './contact.page';
import { ContactService }     from './contact.service';
import { routing }            from './contact.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ ContactPage ],
  providers:    [ ContactService ]
})
export class ContactModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/