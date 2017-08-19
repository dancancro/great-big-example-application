import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    ContactComponent,
    ContactDeleteDialogComponent,
    ContactDeletePopupComponent,
    ContactDetailComponent,
    ContactDialogComponent,
    ContactPopupComponent,
    contactPopupRoute,
    ContactPopupService,
    contactRoute,
    ContactService,
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
