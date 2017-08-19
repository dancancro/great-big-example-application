import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    CrisisComponent,
    CrisisDeleteDialogComponent,
    CrisisDeletePopupComponent,
    CrisisDetailComponent,
    CrisisDialogComponent,
    CrisisPopupComponent,
    crisisPopupRoute,
    CrisisPopupService,
    crisisRoute,
    CrisisService,
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
