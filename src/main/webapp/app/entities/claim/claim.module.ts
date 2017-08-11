import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  ClaimService,
  ClaimPopupService,
  ClaimComponent,
  ClaimDetailComponent,
  ClaimDialogComponent,
  ClaimPopupComponent,
  ClaimDeletePopupComponent,
  ClaimDeleteDialogComponent,
  claimRoute,
  claimPopupRoute,
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
