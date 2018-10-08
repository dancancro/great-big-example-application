import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from 'app/shared';
import {
    TalkComponent,
    TalkDetailComponent,
    TalkUpdateComponent,
    TalkDeletePopupComponent,
    TalkDeleteDialogComponent,
    talkRoute,
    talkPopupRoute
} from './';

const ENTITY_STATES = [...talkRoute, ...talkPopupRoute];

@NgModule({
    imports: [GreatBigExampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TalkComponent, TalkDetailComponent, TalkUpdateComponent, TalkDeleteDialogComponent, TalkDeletePopupComponent],
    entryComponents: [TalkComponent, TalkUpdateComponent, TalkDeleteDialogComponent, TalkDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationTalkModule {}
