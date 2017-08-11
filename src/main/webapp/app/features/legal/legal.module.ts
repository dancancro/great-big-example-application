/**
 * @module LegalModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LegalComponent } from './legal.component';
import { LegalRouting } from './legal.routing';
/**
 * @whatItDoes Lazy loaded feature module for legal pages.
 * @consumers @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    LegalRouting,
    CommonModule
  ],
  declarations: [LegalComponent]
})
export class LegalModule { }
