import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    HeroService,
    HeroPopupService,
    HeroComponent,
    HeroDetailComponent,
    HeroDialogComponent,
    HeroPopupComponent,
    HeroDeletePopupComponent,
    HeroDeleteDialogComponent,
    heroRoute,
    heroPopupRoute,
} from './';

const ENTITY_STATES = [
    ...heroRoute,
    ...heroPopupRoute,
];

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        HeroComponent,
        HeroDetailComponent,
        HeroDialogComponent,
        HeroDeleteDialogComponent,
        HeroPopupComponent,
        HeroDeletePopupComponent,
    ],
    entryComponents: [
        HeroComponent,
        HeroDialogComponent,
        HeroPopupComponent,
        HeroDeleteDialogComponent,
        HeroDeletePopupComponent,
    ],
    providers: [
        HeroService,
        HeroPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationHeroModule { }
