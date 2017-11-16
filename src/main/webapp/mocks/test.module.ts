import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JhiLanguageService } from 'ng-jhipster';
import { StoreModule } from '@ngrx/store';
import 'hammerjs';

import { MockLanguageService } from './mock-language.service';
import { AppConfig } from '../app/app.config';
import { reducers, metaReducers } from '../app/core/store';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers })
    ],
    providers: [
        MockBackend,
        BaseRequestOptions,
        {
            provide: JhiLanguageService,
            useClass: MockLanguageService
        },
        {
            provide: HttpClient,
            useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new HttpClient(backendInstance, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        },
        AppConfig
    ]
})
export class GreatBigExampleApplicationTestModule { }
