import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GreatBigExampleApplicationSharedModule } from '../shared/shared.module';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    MealsLayoutComponent,
    StandardLayoutComponent,
    StatusBarComponent,
    StatusBarAwareDirective
} from './';
import { MealsSharedModule } from '../features/meals/shared/shared.module';

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
        MealsSharedModule.forRoot()
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
