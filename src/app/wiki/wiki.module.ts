// From Style guide item 4-09 - Feature Modules
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-09

import { NgModule } from '@angular/core';

import { WikiComponent } from './wiki.component';
import { WikiSmartComponent } from './wiki-smart.component';
import { WikipediaService } from './wikipedia.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    WikiSmartComponent,
    WikiComponent
  ],
  providers: [
    WikipediaService
  ]
})
export class WikiModule { }
