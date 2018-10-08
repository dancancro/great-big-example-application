import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from 'app/shared';
import {
    NoteComponent,
    NoteDetailComponent,
    NoteUpdateComponent,
    NoteDeletePopupComponent,
    NoteDeleteDialogComponent,
    noteRoute,
    notePopupRoute
} from './';

const ENTITY_STATES = [...noteRoute, ...notePopupRoute];

@NgModule({
    imports: [GreatBigExampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [NoteComponent, NoteDetailComponent, NoteUpdateComponent, NoteDeleteDialogComponent, NoteDeletePopupComponent],
    entryComponents: [NoteComponent, NoteUpdateComponent, NoteDeleteDialogComponent, NoteDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationNoteModule {}
