import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from 'app/shared';
import {
    RebuttalComponent,
    RebuttalDetailComponent,
    RebuttalUpdateComponent,
    RebuttalDeletePopupComponent,
    RebuttalDeleteDialogComponent,
    rebuttalRoute,
    rebuttalPopupRoute
} from './';

const ENTITY_STATES = [...rebuttalRoute, ...rebuttalPopupRoute];

@NgModule({
    imports: [GreatBigExampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RebuttalComponent,
        RebuttalDetailComponent,
        RebuttalUpdateComponent,
        RebuttalDeleteDialogComponent,
        RebuttalDeletePopupComponent
    ],
    entryComponents: [RebuttalComponent, RebuttalUpdateComponent, RebuttalDeleteDialogComponent, RebuttalDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationRebuttalModule {}
