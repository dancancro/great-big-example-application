import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Message } from './message.model';
import { slices } from '../util';
import { SocketService } from '../../services/socket.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class MessageEffects {
    // Since we're using WebSockets, we just need to connect and the data will be pushed
    // @Effect()
    // private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.MESSAGE, this.dataService);
    @Effect()
    private addToRemote$ = functions.addToRemote$(this.actions$, slices.MESSAGE, this.dataService, this.store);

    constructor(
        private store: Store<Message>,
        private actions$: Actions,
        private dataService: SocketService
    ) { }
}
