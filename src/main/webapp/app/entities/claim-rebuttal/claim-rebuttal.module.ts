import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  ClaimRebuttalService,
  ClaimRebuttalPopupService,
  ClaimRebuttalComponent,
  ClaimRebuttalDetailComponent,
  ClaimRebuttalDialogComponent,
  ClaimRebuttalPopupComponent,
  ClaimRebuttalDeletePopupComponent,
  ClaimRebuttalDeleteDialogComponent,
  claimRebuttalRoute,
  claimRebuttalPopupRoute,
} from './';

const ENTITY_STATES = [
  ...claimRebuttalRoute,
  ...claimRebuttalPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    ClaimRebuttalComponent,
    ClaimRebuttalDetailComponent,
    ClaimRebuttalDialogComponent,
    ClaimRebuttalDeleteDialogComponent,
    ClaimRebuttalPopupComponent,
    ClaimRebuttalDeletePopupComponent,
  ],
  entryComponents: [
    ClaimRebuttalComponent,
    ClaimRebuttalDialogComponent,
    ClaimRebuttalPopupComponent,
    ClaimRebuttalDeleteDialogComponent,
    ClaimRebuttalDeletePopupComponent,
  ],
  providers: [
    ClaimRebuttalService,
    ClaimRebuttalPopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationClaimRebuttalModule { }
