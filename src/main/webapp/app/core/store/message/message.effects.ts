import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Message, initialMessage } from './message.model';
import { slices } from '../util';
import { SocketService } from '../../services/socket.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';

@Injectable()
export class MessageEffects {
    // Since we're using WebSockets, we just need to connect and the data will be pushed
    // @Effect()
    // private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.MESSAGE, this.dataService);
    @Effect()
    private addToRemote$ = entityFunctions.addToRemote$(this.actions$, slices.MESSAGE, this.dataService, this.store, initialMessage);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: SocketService
    ) { }
}
