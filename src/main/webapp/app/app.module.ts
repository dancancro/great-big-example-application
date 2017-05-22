import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { GreatBigExampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { GreatBigExampleApplicationHomeModule } from './home/home.module';
import { GreatBigExampleApplicationAdminModule } from './admin/admin.module';
import { GreatBigExampleApplicationAccountModule } from './account/account.module';
import { GreatBigExampleApplicationEntityModule } from './entities/entity.module';
import { StoreLogMonitorModule } from '@ngrx/store-log-monitor';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { AppConfig } from './app.config';

/** TODO: remove when work-around is not needed*/
import 'hammerjs';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        GreatBigExampleApplicationSharedModule,
        GreatBigExampleApplicationHomeModule,
        GreatBigExampleApplicationAdminModule,
        GreatBigExampleApplicationAccountModule,
        GreatBigExampleApplicationEntityModule,
        FeaturesModule,
        CoreModule,
        StoreLogMonitorModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        AppConfig,
        ProfileService,
        // customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [JhiMainComponent]
})
export class GreatBigExampleApplicationAppModule { }
