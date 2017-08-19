import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
    TalkComponent,
    TalkDeleteDialogComponent,
    TalkDeletePopupComponent,
    TalkDetailComponent,
    TalkDialogComponent,
    TalkPopupComponent,
    talkPopupRoute,
    TalkPopupService,
    TalkResolvePagingParams,
    talkRoute,
    TalkService,
} from './';

const ENTITY_STATES = [
  ...talkRoute,
  ...talkPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    TalkComponent,
    TalkDetailComponent,
    TalkDialogComponent,
    TalkDeleteDialogComponent,
    TalkPopupComponent,
    TalkDeletePopupComponent,
  ],
  entryComponents: [
    TalkComponent,
    TalkDialogComponent,
    TalkPopupComponent,
    TalkDeleteDialogComponent,
    TalkDeletePopupComponent,
  ],
  providers: [
    TalkService,
    TalkPopupService,
    TalkResolvePagingParams,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationTalkModule { }
