import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  TalkService,
  TalkPopupService,
  TalkComponent,
  TalkDetailComponent,
  TalkDialogComponent,
  TalkPopupComponent,
  TalkDeletePopupComponent,
  TalkDeleteDialogComponent,
  talkRoute,
  talkPopupRoute,
  TalkResolvePagingParams,
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
