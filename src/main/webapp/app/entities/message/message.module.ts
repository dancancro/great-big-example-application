import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  MessageService,
  MessagePopupService,
  MessageComponent,
  MessageDetailComponent,
  MessageDialogComponent,
  MessagePopupComponent,
  MessageDeletePopupComponent,
  MessageDeleteDialogComponent,
  messageRoute,
  messagePopupRoute,
} from './';

const ENTITY_STATES = [
  ...messageRoute,
  ...messagePopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    MessageComponent,
    MessageDetailComponent,
    MessageDialogComponent,
    MessageDeleteDialogComponent,
    MessagePopupComponent,
    MessageDeletePopupComponent,
  ],
  entryComponents: [
    MessageComponent,
    MessageDialogComponent,
    MessagePopupComponent,
    MessageDeleteDialogComponent,
    MessageDeletePopupComponent,
  ],
  providers: [
    MessageService,
    MessagePopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationMessageModule { }
