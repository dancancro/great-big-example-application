import { NgModule } from '@angular/core';

import { MultiPlayerComponent } from './multi-player.component';

import { P2PGameFacade } from '../../../core/store/p2p-game/p2p-game.facade';
import { WebRTCGateway } from '../../../core/gateways/webrtc.gateway';
import { WebSocketGateway } from '../../../core/gateways/websocket.gateway';

import { GameSharedModule } from '../shared/shared.module';
import { RoomConfig } from '../../../core/gateways/webrtc.gateway';

@NgModule({
    imports: [GameSharedModule],
    declarations: [MultiPlayerComponent],
    exports: [MultiPlayerComponent],
    providers: [P2PGameFacade, WebRTCGateway, WebSocketGateway, RoomConfig]
})
export class MultiPlayerModule { }
