import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  RebuttalService,
  RebuttalPopupService,
  RebuttalComponent,
  RebuttalDetailComponent,
  RebuttalDialogComponent,
  RebuttalPopupComponent,
  RebuttalDeletePopupComponent,
  RebuttalDeleteDialogComponent,
  rebuttalRoute,
  rebuttalPopupRoute,
} from './';

const ENTITY_STATES = [
  ...rebuttalRoute,
  ...rebuttalPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    RebuttalComponent,
    RebuttalDetailComponent,
    RebuttalDialogComponent,
    RebuttalDeleteDialogComponent,
    RebuttalPopupComponent,
    RebuttalDeletePopupComponent,
  ],
  entryComponents: [
    RebuttalComponent,
    RebuttalDialogComponent,
    RebuttalPopupComponent,
    RebuttalDeleteDialogComponent,
    RebuttalDeletePopupComponent,
  ],
  providers: [
    RebuttalService,
    RebuttalPopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationRebuttalModule { }
