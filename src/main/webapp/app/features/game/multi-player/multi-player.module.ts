import { NgModule } from '@angular/core';

import { MultiPlayerComponent } from './multi-player.component';

import { P2PGameModel } from '../../../core/store/p2p-game/p2p-game.model';
import { WebRTCGateway } from './gateways/webrtc.gateway';
import { WebSocketGateway } from '../../../core/gateways/websocket.gateway';

import { GameSharedModule } from '../shared/shared.module';
import { RoomConfig } from '../config/config';

@NgModule({
    imports: [GameSharedModule],
    declarations: [MultiPlayerComponent],
    exports: [MultiPlayerComponent],
    providers: [P2PGameModel, WebRTCGateway, WebSocketGateway, RoomConfig]
})
export class MultiPlayerModule { }
