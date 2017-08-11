import { NgModule } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from './mock-language.service';
import 'hammerjs';
import { AppConfig } from '../app/app.config';

@NgModule({
    providers: [
        MockBackend,
        BaseRequestOptions,
        {
            provide: JhiLanguageService,
            useClass: MockLanguageService
        },
        {
            provide: Http,
            useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backendInstance, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        },
        AppConfig
    ]
})
export class GreatBigExampleApplicationTestModule { }
