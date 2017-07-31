import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessagesRouting } from './messages.routing';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MessagesPage } from './messages.page';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from '../../core/store/message/message.effects';

@NgModule({
    declarations: [
        MessagesPage,
    ],
    imports: [
        CommonModule,
        EffectsModule.forRoot([MessageEffects]),
        FormsModule,
        MessagesRouting,
        MaterialModule,
        FlexLayoutModule,
        NgxDatatableModule
    ]
})
export class MessagesModule {
    constructor() { }
}
