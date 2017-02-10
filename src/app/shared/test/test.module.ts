// From Style guide item 4-10
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-10

import { NgModule } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './router-stubs'

export const components = [
  RouterLinkStubDirective, RouterOutletStubComponent
];

@NgModule({
  imports: [
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class TestModule { }
