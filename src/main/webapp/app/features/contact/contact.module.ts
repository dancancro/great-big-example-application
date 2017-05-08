import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { RESTService } from '../../core/services/rest.service';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { ContactPage } from './contact.page';
import { ContactRouting } from './contact.routing';
import { ContactEffects } from '../../core/store/contact/contact.effects';
import { customHttpProvider } from '../../blocks/interceptor/http.provider';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        ContactRouting,
        EffectsModule.run(ContactEffects),
        ReactiveFormsModule
    ],
    declarations: [
        ContactPage
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
