import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    ClaimComponent,
    ClaimDeleteDialogComponent,
    ClaimDeletePopupComponent,
    ClaimDetailComponent,
    ClaimDialogComponent,
    ClaimPopupComponent,
    claimPopupRoute,
    ClaimPopupService,
    claimRoute,
    ClaimService,
} from './';

const ENTITY_STATES = [
  ...claimRoute,
  ...claimPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    ClaimComponent,
    ClaimDetailComponent,
    ClaimDialogComponent,
    ClaimDeleteDialogComponent,
    ClaimPopupComponent,
    ClaimDeletePopupComponent,
  ],
  entryComponents: [
    ClaimComponent,
    ClaimDialogComponent,
    ClaimPopupComponent,
    ClaimDeleteDialogComponent,
    ClaimDeletePopupComponent,
  ],
  providers: [
    ClaimService,
    ClaimPopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationClaimModule { }
