import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from 'app/shared';
import { GreatBigExampleApplicationAdminModule } from 'app/admin/admin.module';
import {
    AuthorComponent,
    AuthorDetailComponent,
    AuthorUpdateComponent,
    AuthorDeletePopupComponent,
    AuthorDeleteDialogComponent,
    authorRoute,
    authorPopupRoute
} from './';

const ENTITY_STATES = [...authorRoute, ...authorPopupRoute];

@NgModule({
    imports: [GreatBigExampleApplicationSharedModule, GreatBigExampleApplicationAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [AuthorComponent, AuthorDetailComponent, AuthorUpdateComponent, AuthorDeleteDialogComponent, AuthorDeletePopupComponent],
    entryComponents: [AuthorComponent, AuthorUpdateComponent, AuthorDeleteDialogComponent, AuthorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationAuthorModule {}
