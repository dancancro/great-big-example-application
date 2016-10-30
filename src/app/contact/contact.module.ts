import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DataService } from '../core/store/data.service';
import { SharedModule } from '../shared/shared.module';
import { ContactPage } from './contact.page';
import { routing } from './contact.routing';
import { ContactEffects } from '../core/store/contact/contact.effects';

@NgModule({
  imports: [
    SharedModule,
    routing,
    EffectsModule.run(ContactEffects)
  ],
  declarations: [
    ContactPage
  ],
  providers: [
    DataService
  ]
})
export class ContactModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/