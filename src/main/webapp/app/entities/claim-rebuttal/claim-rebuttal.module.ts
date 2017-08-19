import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    ClaimRebuttalComponent,
    ClaimRebuttalDeleteDialogComponent,
    ClaimRebuttalDeletePopupComponent,
    ClaimRebuttalDetailComponent,
    ClaimRebuttalDialogComponent,
    ClaimRebuttalPopupComponent,
    claimRebuttalPopupRoute,
    ClaimRebuttalPopupService,
    claimRebuttalRoute,
    ClaimRebuttalService,
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
