import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Principal } from '../../shared';
import { SocketService } from '../../core/services/socket.service';
import * as EntityActions from '../../core/store/entity/entity.actions';

@Component({
    selector: 'message',
    templateUrl: 'messages.page.html'
})

export class MessagesPage implements OnInit, OnDestroy {
    private message$: Observable<any>;
    private messageSubscription: any;
    public messages = [];
    public email: string = 'anonymous';
    public message: string = '';

    constructor(
        private store: Store<any>,
        private socketService: SocketService,
        private principal: Principal) {
    }

    ngOnInit() {
        //authenticate
        this.principal.identity().then((account) => {
            //connect to websocket
            this.socketService.connect('message', {});

            //subscribe to websocket

            // connect to redux store
            this.message$ = this.store.select('message');
            this.messageSubscription = this.message$.subscribe((messages: any[]) => {
                this.messages = messages;
            });
        });
    }

    ngOnDestroy() {
        // this.messageSubscription.unsubscribe();
        this.socketService.unsubscribe();
    }

    createMessage() {
        this.store.dispatch(new EntityActions.Add('message', {
            email: this.email,
            message: this.message
        }));
    }
}
