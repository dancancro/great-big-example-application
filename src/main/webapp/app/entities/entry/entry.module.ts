import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    EntryComponent,
    EntryDeleteDialogComponent,
    EntryDeletePopupComponent,
    EntryDetailComponent,
    EntryDialogComponent,
    EntryPopupComponent,
    entryPopupRoute,
    EntryPopupService,
    entryRoute,
    EntryService,
} from './';

const ENTITY_STATES = [
  ...entryRoute,
  ...entryPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    EntryComponent,
    EntryDetailComponent,
    EntryDialogComponent,
    EntryDeleteDialogComponent,
    EntryPopupComponent,
    EntryDeletePopupComponent,
  ],
  entryComponents: [
    EntryComponent,
    EntryDialogComponent,
    EntryPopupComponent,
    EntryDeleteDialogComponent,
    EntryDeletePopupComponent,
  ],
  providers: [
    EntryService,
    EntryPopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationEntryModule { }
