import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { buildP2PCommand } from './index';
import { PROGRESS, COMPLETE } from './command-builders/game-p2p.commands';
import { WebRTCGateway } from '../../../../core/gateways/webrtc.gateway';
import { BaseAsyncService } from '../../../../core/services/base.async-service';
import { RPCCommand } from '../../../../core/commands/rpc.command';
import { JsonPayload } from '../../../../core/commands/payloads/json.command.payload';
import { P2PGameActions } from '../../../../core/store/p2p-game/p2p-game.action-creators';

@Injectable()
export class GameP2PService extends BaseAsyncService {
    constructor(private rtcGateway: WebRTCGateway, private store: Store<any>) {
        super();
        rtcGateway.dataStream
            .map((data: any) => JSON.parse(data.toString()))
            .subscribe((command: any) => {
                switch (command.method) {
                    case PROGRESS:
                        store.dispatch(P2PGameActions.partnerProgress(command.payload.text));
                        break;
                    case COMPLETE:
                        store.dispatch(P2PGameActions.partnerCompleted());
                        break;
                }
            });
    }

    process(action: Action) {
        const baseCommand = new RPCCommand();
        baseCommand.payload = new JsonPayload();
        baseCommand.gateway = this.rtcGateway;
        const commandBuilder = buildP2PCommand(action);
        if (!commandBuilder) {
            console.warn('This command is not supported');
            return Observable.create((obs: Observer<any>) => obs.complete());
        } else {
            return commandBuilder(baseCommand).invoke();
        }
    }
}
