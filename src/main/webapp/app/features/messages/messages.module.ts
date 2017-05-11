import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessagesRouting } from './messages.routing';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MessagesPage } from './messages.page';
import { MessagesService } from './messages.service';

@NgModule({
    declarations: [
        MessagesPage,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MessagesRouting,
        MaterialModule.forRoot(),
        FlexLayoutModule,
        NgxDatatableModule
    ],
    providers: [MessagesService]
})
export class MessagesModule {
    constructor() { }
}
