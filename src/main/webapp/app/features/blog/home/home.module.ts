import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { HomeRouting } from './home.routing';

@NgModule({
    imports: [
        HomeRouting,
        SharedModule
    ],
    declarations: [
        HomePage
    ],
    providers: [
    ]
})
export class HomeModule { }
