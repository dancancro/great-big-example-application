// from https://github.com/PeterKassenaar/ng2-websockets
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';

import { CSRFService } from '../../shared/auth/csrf.service';
import { WindowRef } from '../../shared/services/window.service';
import { AuthServerProvider } from '../../shared/auth/auth-jwt.service';

@Injectable()
export class WebSocketService {
    private subject: Subject<MessageEvent>;
    private subjectData: Subject<number>;
    private stompClient = null;
    private connection: Promise<any>;
    private connectedPromise: any;
    private alreadyConnectedOnce = false;

    constructor(
        private authServerProvider: AuthServerProvider,
        private $window: WindowRef,
        private csrfService: CSRFService
    ) {
        this.connection = this.createConnection();
    }

    // For chat box
    public connect(topic: string): Subject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(topic);
        }
        return this.subject;
    }

    private create(topic: string): Subject<MessageEvent> {
        // building absolute path so that websocket doesn't fail when deploying with a context path
        const loc = this.$window.nativeWindow.location;
        let url;
        url = '//' + loc.host + loc.pathname + 'websocket/' + topic;
        const authToken = this.authServerProvider.getToken();
        if (authToken) {
            url += '?access_token=' + authToken;
        }
        const ws = new SockJS(url);
        this.stompClient = Stomp.over(ws);
        const headers = {};
        this.stompClient.connect(headers, () => {
            this.connectedPromise('success');
            this.connectedPromise = null;
            // this.sendActivity();
            if (!this.alreadyConnectedOnce) {
                // this.subscription = this.router.events.subscribe((event) => {
                //     if (event instanceof NavigationEnd) {
                //         this.sendActivity();
                //     }
                // });
                this.alreadyConnectedOnce = true;
            }
        });

        const observable = Observable.create(
            (obs: Observer<MessageEvent>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);

                return ws.close.bind(ws);
            });

        const observer = {
            next: (data: Object) => {
                // if (ws.readyState === WebSocket.OPEN) {
                //     ws.send(JSON.stringify(data));
                // }
                if (this.stompClient !== null && this.stompClient.connected) {
                    this.stompClient.send(
                        '/topic/' + topic, // destination
                        JSON.stringify(data), // body
                        {} // header
                    );
                }
            }
        };

        return Subject.create(observer, observable);
    }

    // For random numbers
    public connectData(url: string): Subject<number> {
        if (!this.subjectData) {
            this.subjectData = this.createData(url);
        }
        return this.subjectData;
    }

    private createData(url: string): Subject<number> {
        const ws = new WebSocket(url);

        const observable = Observable.create(
            (obs: Observer<number>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);

                return ws.close.bind(ws);
            });

        const observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };

        return Subject.create(observer, observable);
    }

    private createConnection(): Promise<any> {
        return new Promise((resolve, reject) => this.connectedPromise = resolve);
    }
} // end class WebSocketService
