/* tslint:disable:no-unused-variable */

import { Component, Provider, ViewChild, NgZone } from '@angular/core';
import { BaseGateway } from '../../../core/gateways/base.gateway';
import { WebRTCGateway } from '../../../core/gateways/webrtc.gateway';
import { WebSocketGateway, WebSocketGatewayConfig, WS_CONFIG } from '../../../core/gateways/websocket.gateway';
import { GAME_TEXT } from '../config/config';
import * as constants from '../../../app.constants';
import { GameComponent } from '../shared/game/game.component';
import { AppConfig } from '../../../app.config';
import { BaseAsyncService } from '../../../core/services/base.async-service';
import { GameFacade } from '../../../core/store/game/game.facade';
import { P2PGameFacade } from '../../../core/store/p2p-game/p2p-game.facade';
import { RestfulServer } from '../../../core/services/restful-server.service';
import { GameP2PService } from './services/game-p2p.async-service';

import { Observable } from 'rxjs/Observable';

const WSConfig: WebSocketGatewayConfig = {
    port: 9010,
    secure: false,
    host: 'localhost'
};

const providers: Provider[] = [

    // Here we override the BaseAsyncService multi-provider and
    // introduce the GameP2PService service.
    // This way we're using both GameServer and
    // GameP2PService and so the user can send progress to both
    // the application server and the user she is connected with.
    { provide: BaseAsyncService, multi: true, useClass: RestfulServer },
    { provide: BaseAsyncService, multi: true, useClass: GameP2PService },

    // Without lazy-loading it doesn't matter where we declare
    // the WebRTCGateway, BaseGateway and WS_CONFIG. However, notice that
    // these providers are required by the GameP2PService
    // so they should be available in the part of the component tree where
    // we want to render the MultiPlayerComponent.
    { provide: BaseGateway, useClass: WebRTCGateway },
    { provide: WebRTCGateway, useExisting: BaseGateway },
    { provide: WS_CONFIG, useValue: WSConfig },

    GameFacade,
    WebSocketGateway,
    P2PGameFacade
];

@Component({
    selector: 'jhi-multi',
    templateUrl: 'multi-player.component.html',
    styleUrls: ['multi-player.component.css'],
    providers
})
export class MultiPlayerComponent {
    timeLeft = 3;
    playerJoined = false;
    won = false;
    @ViewChild(GameComponent) game: GameComponent;

    private _timer: any;
    text = GAME_TEXT;
    gameEnabled = false;
    gamePlayed = false;

    constructor(private gateway: WebRTCGateway, private zone: NgZone, private p2pFacade: P2PGameFacade) {
        this.gateway.connectionEvents.filter((e: boolean) => e)
            .subscribe(() => {
                this.playerJoined = true;
                this.start();
            });
    }

    gameCompleted(time: number) {
        this.game.reset();
        this.won = true;
        // this.p2pFacade.completeGame(time, this.text);
    }

    partnerText() {
        return this.gameFacade()
            .map((game: any) => game.get('partnerProgress'));
    }

    partnerCompleted() {
        return this.gameFacade()
            .map((game: any) => !!game.get('partnerCompleted'));
    }

    private gameFacade() {
        return this.p2pFacade.p2pGame$
            .filter((game: any) => game && typeof game.get === 'function');
    }

    private start() {
        this.zone.run(() => {
            this._timer = Observable
                .interval(1000)
                .take(4)
                .map((num: number) => 3 - num)
                .subscribe((time: number) => {
                    this.timeLeft = time;
                }, null, () => {
                    console.log('Started!');
                    this.gameEnabled = true;
                });
        });
        this.gamePlayed = true;
    }
}
