import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ChatPage } from './chat.page';

const routes: Routes = [
    {
        path: '',
        component: ChatPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.contact.home.chat',
            source: 'https://github.com/ruddell/jhipster-chat-example',
            tags: ['chat', 'WebSockets']
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [ChatPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRouting { }
