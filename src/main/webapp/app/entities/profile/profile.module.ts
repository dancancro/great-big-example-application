import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    ProfileService,
    ProfilePopupService,
    ProfileComponent,
    ProfileDetailComponent,
    ProfileDialogComponent,
    ProfilePopupComponent,
    ProfileDeletePopupComponent,
    ProfileDeleteDialogComponent,
    profileRoute,
    profilePopupRoute,
} from './';

const ENTITY_STATES = [
    ...profileRoute,
    ...profilePopupRoute,
];

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ProfileComponent,
        ProfileDetailComponent,
        ProfileDialogComponent,
        ProfileDeleteDialogComponent,
        ProfilePopupComponent,
        ProfileDeletePopupComponent,
    ],
    entryComponents: [
        ProfileComponent,
        ProfileDialogComponent,
        ProfilePopupComponent,
        ProfileDeleteDialogComponent,
        ProfileDeletePopupComponent,
    ],
    providers: [
        ProfileService,
        ProfilePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationProfileModule {}
