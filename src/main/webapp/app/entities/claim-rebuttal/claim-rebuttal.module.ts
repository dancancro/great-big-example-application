import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from 'app/shared';
import {
    ClaimRebuttalComponent,
    ClaimRebuttalDetailComponent,
    ClaimRebuttalUpdateComponent,
    ClaimRebuttalDeletePopupComponent,
    ClaimRebuttalDeleteDialogComponent,
    claimRebuttalRoute,
    claimRebuttalPopupRoute
} from './';

const ENTITY_STATES = [...claimRebuttalRoute, ...claimRebuttalPopupRoute];

@NgModule({
    imports: [GreatBigExampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ClaimRebuttalComponent,
        ClaimRebuttalDetailComponent,
        ClaimRebuttalUpdateComponent,
        ClaimRebuttalDeleteDialogComponent,
        ClaimRebuttalDeletePopupComponent
    ],
    entryComponents: [
        ClaimRebuttalComponent,
        ClaimRebuttalUpdateComponent,
        ClaimRebuttalDeleteDialogComponent,
        ClaimRebuttalDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationClaimRebuttalModule {}
