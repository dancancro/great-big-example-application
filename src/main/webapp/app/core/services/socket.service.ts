import { Injectable, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';

import { RootState } from '../store';
import { CSRFService } from '../../shared/auth/csrf.service';
import { WindowRef } from '../../shared/services/window.service';
import { AuthServerProvider } from '../../shared/auth/auth-jwt.service';
import * as EntityActions from '../store/entity/entity.actions';
import { DataService } from './data.service';
import { QueryPayload } from '../store/util';

// const io = require('socket.io-client');
// const hooks = require('feathers-hooks');

// import RxJS from 'rxjs';

// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { helpers } from '../config/helpers';

@Injectable()
export class SocketService implements DataService {
    stompClient = null;
    subscriber = null;
    connection: Promise<any>;
    connectedPromise: any;
    listener: Observable<any>;
    listenerObserver: Observer<any>;
    alreadyConnectedOnce = false;
    private subscription: Subscription;
    public resource$: Observable<any>;
    private observable;

    constructor(
        private router: Router,
        private authServerProvider: AuthServerProvider,
        private $window: WindowRef,
        private csrfService: CSRFService,   // ??
        private store: Store<any>
    ) {
        this.connection = this.createConnection();
        this.listener = this.createListener();
        this.resource$ = new Observable((observable) => this.observable = observable);
    }

    // TODO: fix these up. I'm not sure how these work with sockets
    getEntity(id: string, service: keyof RootState): Observable<any> {
        return this.sendData(`/topic/${service}`, id);
    }
    add(service: keyof RootState, entity: any, ): Observable<any> {
        return this.sendData(`/topic/${service}`, entity);
    }
    update(service: keyof RootState, entity: any): Observable<any> {
        return this.sendData(`/topic/${service}`, entity);
    }
    remove(service: keyof RootState, entity: any): Observable<any> {
        return this.sendData(`/topic/${service}`, entity);
    }
    getEntities(table: keyof RootState,
        query: QueryPayload = null, state: RootState): Observable<any[]> {
        return this.sendData(`/topic/${table}`, query);
    }

    sendData(dest: string, data: any): Observable<any> {
        let x;
        if (this.stompClient !== null && this.stompClient.connected) {
            x = this.stompClient.send(dest, JSON.stringify(data), {});
        } else {
            x = Observable.empty();  // TODO: ??
        }
        return x;
    }

    connect(service: string, data: any) {
        if (this.connectedPromise === null) {
            this.connection = this.createConnection();
        }
        // building absolute path so that websocket doesn't fail when deploying with a context path
        const loc = this.$window.nativeWindow.location;
        let url;
        url = '//' + loc.host + loc.pathname + 'websocket/' + service;
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
            // this.sendActivity();
            // this.sendData('/topic/' + service, data);
            if (!this.alreadyConnectedOnce) {
                // this.subscription = this.router.events.subscribe((event) => {
                //     if (event instanceof NavigationEnd) {
                //         this.sendActivity();
                //     }
                // });
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

    subscribe(service: keyof RootState) {
        this.connection.then(() => {
            this.subscriber = this.stompClient.subscribe('/topic/' + service, (data) => {
                this.listenerObserver.next(JSON.parse(data.body));
                this.store.dispatch(new EntityActions.Load(service, data.body));
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
    // authenticate(option?: any) {
    //   return this.app.authenticate(option)
    // }

    // logout() {
    //   // feathers-authentication-client will bind logout method to app
    //   // app.logout = app.passport.logout.bind(app.passport);
    //   return this.app.logout()
    // }

    // getUser() {
    //   return this.app.get('user')
    // }

    // getToken() {
    //   return this.app.get('token')
    // }

    // isLogin() {
    //   return this.getUser() ? true : false
    // }
}
