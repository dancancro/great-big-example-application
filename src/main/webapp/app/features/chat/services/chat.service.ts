import { Injectable, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';
import { Store } from '@ngrx/store';

import { CSRFService } from '../../../shared/auth/csrf.service';
import { AuthServerProvider } from '../../../shared/auth/auth-jwt.service';

import { Message } from '../../../core/store/message/message.model';
import * as EntityActions from '../../../core/store/entity/entity.actions';
import { slices } from '../../../core/store/util';

let document: any;

@Injectable()
export class ChatService {
    stompClient = null;
    subscriber = null;
    connection: Promise<any>;
    connectedPromise: any;
    listener: Observable<any>;
    listenerObserver: Observer<any>;
    alreadyConnectedOnce = false;
    private subscription: Subscription;

    constructor(
        private router: Router,
        private authServerProvider: AuthServerProvider,
        // private $window: Window,
        private csrfService: CSRFService,
        private store: Store<Message>
    ) {
        this.connection = this.createConnection();
        this.listener = this.createListener();
    }

    connect() {
        if (this.connectedPromise === null) {
            this.connection = this.createConnection();
        }
        // building absolute path so that websocket doesnt fail when deploying with a context path
        // const loc = this.$window.location;
        const loc = window.location;
        let url = '//' + loc.host + loc.pathname + 'websocket/chat';
        const authToken = this.authServerProvider.getToken();
        if (authToken) {
            url += '?access_token=' + authToken;
        }
        const socket = new SockJS(url);
        this.stompClient = Stomp.over(socket);
        const headers = {};
        this.stompClient.connect(headers, () => {
            this.connectedPromise('success');
            this.connectedPromise = null;
            this.subscribe();
            if (!this.alreadyConnectedOnce) {
                this.alreadyConnectedOnce = true;
            }
        });
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
            this.stompClient = null;
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
        this.alreadyConnectedOnce = false;
    }

    receive() {
        return this.listener;
    }

    sendMessage(message) {
        if (this.stompClient !== null && this.stompClient.connected) {
            this.stompClient.send(
                '/chat', // destination
                JSON.stringify({ 'message': message }), // body
                {} // header
            );
        }
    }

    subscribe() {
        this.connection.then(() => {
            this.subscriber = this.stompClient.subscribe('/chat/public', (data) => {
                const message = JSON.parse(data.body);
                this.store.dispatch(new EntityActions.LoadSuccess<Message>(slices.MESSAGE, message));
                // this.listenerObserver.next(JSON.parse(data.body));
            });
        });
    }

    unsubscribe() {
        if (this.subscriber !== null) {
            this.subscriber.unsubscribe();
        }
        this.listener = this.createListener();
    }

    private createListener(): Observable<any> {
        return new Observable((observer) => {
            this.listenerObserver = observer;
        });
    }

    private createConnection(): Promise<any> {
        return new Promise((resolve, reject) => this.connectedPromise = resolve);
    }
}
