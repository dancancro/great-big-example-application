import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../core/store';
import { Message } from '../../core/store/message/message.model';
import { ChatService } from './services/chat.service';
import { Account, LoginModalService, Principal } from '../../shared';

@Component({
    selector: 'jhi-chat-page',
    templateUrl: './chat.page.html',
    styleUrls: [
        './chat.page.css'
    ]

})
export class ChatPage implements OnInit {
    messages$: Store<Message[]>;
    account: Account;
    modalRef: NgbModalRef;
    messages: Array<Object> = [];
    message = '';

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private chatService: ChatService,
        private store: Store<fromRoot.RootState>
    ) {
    }

    ngOnInit() {
        this.messages$ = this.store.select(fromRoot.getMessages);
        this.chatService.connect();

        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.registerLogoutSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
                this.chatService.disconnect();
                this.chatService.connect();
            });
        });
    }
    registerLogoutSuccess() {
        this.eventManager.subscribe('logoutSuccess', (message) => {
            this.chatService.disconnect();
            this.chatService.connect();
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    sendMessage(message) {
        if (message.length === 0) {
            return;
        }
        this.chatService.sendMessage(message);
        this.message = '';
    }
}
