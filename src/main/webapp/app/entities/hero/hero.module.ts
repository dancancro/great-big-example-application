import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from 'app/shared';
import {
    HeroComponent,
    HeroDetailComponent,
    HeroUpdateComponent,
    HeroDeletePopupComponent,
    HeroDeleteDialogComponent,
    heroRoute,
    heroPopupRoute
} from './';

const ENTITY_STATES = [...heroRoute, ...heroPopupRoute];

@NgModule({
    imports: [GreatBigExampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [HeroComponent, HeroDetailComponent, HeroUpdateComponent, HeroDeleteDialogComponent, HeroDeletePopupComponent],
    entryComponents: [HeroComponent, HeroUpdateComponent, HeroDeleteDialogComponent, HeroDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationHeroModule {}
