import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessagesRouting } from './messages.routing';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgGridModule } from 'ag-grid-angular/main';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-material.css';

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
        AgGridModule.withComponents([])
    ],
    providers: [MessagesService]
})
export class MessagesModule {
    constructor() { }
}
