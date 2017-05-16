import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../shared';

import { HOME_ROUTE, HomePage } from './';

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedModule,
    RouterModule.forRoot([HOME_ROUTE], { useHash: true })
  ],
  declarations: [
    HomePage,
  ],
  entryComponents: [
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationHomeModule { }
