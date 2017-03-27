// From Style guide item 4-09 - Feature Modules
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-09

import { NgModule } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';

import { WikiComponent } from './wiki.component';
import { WikiSmartComponent } from './wiki-smart.component';
import { WikiPage } from './wiki.page';
import { WikipediaService } from './wikipedia.service';
import { SharedModule } from '../shared/shared.module';
import { WikiRouting } from './wiki.routing';

@NgModule({
  imports: [
    SharedModule,
    WikiRouting,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    WikiPage,
    WikiSmartComponent,
    WikiComponent
  ],
  providers: [
    WikipediaService
  ]
})
export class WikiModule { }
