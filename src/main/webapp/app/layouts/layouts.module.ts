import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GreatBigExampleApplicationSharedModule } from '../shared/shared.module';

import {
    ActiveMenuDirective,
    ErrorComponent,
    FooterComponent,
    JhiMainComponent,
    MealsLayoutComponent,
    NavbarComponent,
    PageRibbonComponent,
    StandardLayoutComponent,
    StatusBarAwareDirective,
    StatusBarComponent
} from './';
import { MealsModule } from '../features/meals/meals.module';

export const components = [
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    MealsLayoutComponent,
    StandardLayoutComponent,
    StatusBarComponent,
    StatusBarAwareDirective
];

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        BrowserModule,
        RouterModule,
        MealsModule
    ],
    declarations: [
        ...components
    ],
    providers: [
    ],
    exports: [
        ...components
    ]
})

export class LayoutsModule { }
