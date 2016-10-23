import {NgModule}      from '@angular/core';

import { BCNavigatorModule, bcNavComponents } from './bc-navigator/navigator.module';
import { RioNavigatorModule, rioNavComponents } from './rio-navigator/navigator.module';

export const navComponents = [
    ...bcNavComponents,
//    ...rioNavComponents
];

@NgModule({
  imports: [
    BCNavigatorModule,
 //   RioNavigatorModule
  ],
  exports: navComponents
})
export class NavigatorModule { }
