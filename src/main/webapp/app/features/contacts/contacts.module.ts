import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { RESTService } from '../../core/services/rest.service';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { ContactsPage } from './contacts.page';
import { ContactsRouting } from './contacts.routing';
import { ContactEffects } from '../../core/store/contact/contact.effects';
import { customHttpProvider } from '../../core/interceptor/http.provider';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        ContactsRouting,
        EffectsModule.forRoot([ContactEffects]),
        ReactiveFormsModule
    ],
    declarations: [
        ContactsPage
    ],
    providers: [
        customHttpProvider(),
        RESTService
    ]
})
export class ContactModule { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
