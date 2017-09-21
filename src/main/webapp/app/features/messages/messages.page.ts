import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Principal } from '../../shared';
import { SocketService } from '../../core/services/socket.service';
import { slices } from '../../core/store/util';
import * as EntityActions from '../../core/store/entity/entity.actions';
import { Message } from '../../core/store/message/message.model';
import * as fromRoot from '../../core/store';
import * as SliceActions from '../../core/store/slice/slice.actions';

@Component({
    selector: 'jhi-messages-page',
    templateUrl: 'messages.page.html'
})

export class MessagesPage implements OnInit, OnDestroy {
    private messages$: Store<Message[]>;
    private messageSubscription: any;
    public messages = [];
    public userLogin = 'anonymous';
    public message = '';
    editing = {};

    constructor(
        private store: Store<any>,
        private socketService: SocketService,
        private principal: Principal) {
    }

    ngOnInit() {
        // authenticate
        this.principal.identity().then((account) => {
            // connect to websocket
            // this.socketService.connect(slices.MESSAGE, {});

            // connect to redux store
            this.messages$ = this.store.select(fromRoot.getMessages);
            this.messageSubscription = this.messages$.subscribe((messages: any[]) => {
                this.messages = messages;
            });
        });
        this.store.dispatch(new EntityActions.Load(slices.MESSAGE));

    }

    ngOnDestroy() {
        this.messageSubscription.unsubscribe();
        // this.socketService.unsubscribe();
    }

    // createMessage() {
    //     this.store.dispatch(new EntityActions.Add(slices.MESSAGE, {
    //         userLogin: this.userLogin,
    //         message: this.message
    //     }));
    // }

    updateValue(event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        const message = this.messages[row.$$index];
        const id = message.id;
        let newObj = { id }
        newObj[cell] = event.target.value;
        newObj = Object.assign({}, message, newObj)
        this.store.dispatch(new EntityActions.Patch(slices.MESSAGE, newObj));

        // this.messages[row.$$index][cell] = event.target.value;
    }
}
