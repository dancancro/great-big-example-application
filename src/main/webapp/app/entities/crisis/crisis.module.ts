import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  CrisisService,
  CrisisPopupService,
  CrisisComponent,
  CrisisDetailComponent,
  CrisisDialogComponent,
  CrisisPopupComponent,
  CrisisDeletePopupComponent,
  CrisisDeleteDialogComponent,
  crisisRoute,
  crisisPopupRoute,
} from './';

const ENTITY_STATES = [
  ...crisisRoute,
  ...crisisPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    CrisisComponent,
    CrisisDetailComponent,
    CrisisDialogComponent,
    CrisisDeleteDialogComponent,
    CrisisPopupComponent,
    CrisisDeletePopupComponent,
  ],
  entryComponents: [
    CrisisComponent,
    CrisisDialogComponent,
    CrisisPopupComponent,
    CrisisDeleteDialogComponent,
    CrisisDeletePopupComponent,
  ],
  providers: [
    CrisisService,
    CrisisPopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationCrisisModule { }
