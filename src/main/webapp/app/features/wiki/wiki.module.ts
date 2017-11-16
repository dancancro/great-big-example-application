// From Style guide item 4-09 - Feature Modules
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-09

import { NgModule } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';

import { WikiComponent } from './wiki.component';
import { WikiSmartComponent } from './wiki-smart.component';
import { WikiPage } from './wiki.page';
import { WikipediaService } from './wikipedia.service';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { WikiRouting } from './wiki.routing';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        WikiRouting,
        HttpClientJsonpModule,
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
