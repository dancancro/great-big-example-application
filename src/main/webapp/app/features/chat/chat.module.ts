import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';

import { ChatPage } from './chat.page';
import { ChatRouting } from './chat.routing';
import { ChatService } from './services/chat.service';
import { customHttpProvider } from '../../core/interceptor/http.provider';

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
        // { provide: Window, useValue: window },
        customHttpProvider(),
        ChatService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatModule { }
