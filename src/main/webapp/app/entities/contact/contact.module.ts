import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  ContactService,
  ContactPopupService,
  ContactComponent,
  ContactDetailComponent,
  ContactDialogComponent,
  ContactPopupComponent,
  ContactDeletePopupComponent,
  ContactDeleteDialogComponent,
  contactRoute,
  contactPopupRoute,
} from './';

const ENTITY_STATES = [
  ...contactRoute,
  ...contactPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    ContactDialogComponent,
    ContactDeleteDialogComponent,
    ContactPopupComponent,
    ContactDeletePopupComponent,
  ],
  entryComponents: [
    ContactComponent,
    ContactDialogComponent,
    ContactPopupComponent,
    ContactDeleteDialogComponent,
    ContactDeletePopupComponent,
  ],
  providers: [
    ContactService,
    ContactPopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationContactModule { }
