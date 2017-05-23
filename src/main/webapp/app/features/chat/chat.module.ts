import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';

import { ChatPage } from './chat.page';
import { ChatRouting } from './chat.routing';
import { ChatService } from './services/chat.service';
import { customHttpProvider } from '../../blocks/interceptor/http.provider';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        ChatRouting
    ],
    declarations: [
        ChatPage,
    ],
    entryComponents: [
    ],
    providers: [
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        ChatService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatModule { }
