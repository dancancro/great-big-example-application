import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared';
import {
  TagService,
  TagPopupService,
  TagComponent,
  TagDetailComponent,
  TagDialogComponent,
  TagPopupComponent,
  TagDeletePopupComponent,
  TagDeleteDialogComponent,
  tagRoute,
  tagPopupRoute,
} from './';

const ENTITY_STATES = [
  ...tagRoute,
  ...tagPopupRoute,
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    TagComponent,
    TagDetailComponent,
    TagDialogComponent,
    TagDeleteDialogComponent,
    TagPopupComponent,
    TagDeletePopupComponent,
  ],
  entryComponents: [
    TagComponent,
    TagDialogComponent,
    TagPopupComponent,
    TagDeleteDialogComponent,
    TagDeletePopupComponent,
  ],
  providers: [
    TagService,
    TagPopupService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationTagModule { }
