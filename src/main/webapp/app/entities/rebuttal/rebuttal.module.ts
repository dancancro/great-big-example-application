import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    RebuttalComponent,
    RebuttalDeleteDialogComponent,
    RebuttalDeletePopupComponent,
    RebuttalDetailComponent,
    RebuttalDialogComponent,
    RebuttalPopupComponent,
    rebuttalPopupRoute,
    RebuttalPopupService,
    rebuttalRoute,
    RebuttalService,
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
