import { Injectable, Inject, OpaqueToken } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BaseGateway } from './base.gateway';
import { Command } from '../commands/base.command';

export interface WebSocketGatewayConfig {
    secure: boolean;
    port: number;
    host: string;
}

export const WS_CONFIG = new OpaqueToken('ws-config');

@Injectable()
export class WebSocketGateway extends BaseGateway {
    private endpoint: string;
    private ws: WebSocket;
    private connected = false;
    private reconnectTimeout: any;

    constructor( @Inject(WS_CONFIG) private config: WebSocketGatewayConfig) {
        super();
        let schema = 'ws';
        if (config.secure) {
            schema = 'wss';
        }
        this.endpoint = schema + '://' + config.host + ':' + config.port + '/websocket';
        this.createConnection();
    }

    send(command: Command) {
        // Send if connected & drop all others
        // TODO: buffer the input
        if (this.connected) {
            this.ws.send(command.serialize());
        }
        return Observable.create();
    }

    createConnection() {
        if (this.reconnectTimeout) {
            return;
        }
        this.ws = new WebSocket(this.endpoint);
        this.ws.onopen = () => {
            this.connected = true;
            this.connectionEventsEmitter.next(true);
        };
        this.ws.onerror = this.ws.onclose = () => {
            this.connected = false;
            this.connectionEventsEmitter.next(true);
            this.reconnectTimeout = setTimeout(() => {
                this.createConnection();
            }, 2000);
        };
        this.ws.onmessage = (e: any) => {
            this.emitter.next(e.data);
        };
    }
}
