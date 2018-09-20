import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from 'app/shared';
import {
    CrisisComponent,
    CrisisDetailComponent,
    CrisisUpdateComponent,
    CrisisDeletePopupComponent,
    CrisisDeleteDialogComponent,
    crisisRoute,
    crisisPopupRoute
} from './';

const ENTITY_STATES = [...crisisRoute, ...crisisPopupRoute];

@NgModule({
    imports: [GreatBigExampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [CrisisComponent, CrisisDetailComponent, CrisisUpdateComponent, CrisisDeleteDialogComponent, CrisisDeletePopupComponent],
    entryComponents: [CrisisComponent, CrisisUpdateComponent, CrisisDeleteDialogComponent, CrisisDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationCrisisModule {}
