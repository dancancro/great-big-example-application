import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as Peer from 'simple-peer';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Gateway } from '../../../../core/gateways/base.gateway';
import { WebSocketGateway } from '../../../../core/gateways/websocket.gateway';
import { Command } from '../../../../core/commands/base.command';
import { JsonPayload } from '../../../../core/commands/payloads/json.command.payload';

import { Observer } from 'rxjs/Observer';
import { RoomConfig } from '../../config/config';

class SignalingCommand extends Command { }

// TODO implement disconnect functionality
@Injectable()
export class WebRTCGateway extends Gateway {
    public connectionEvents: Observable<boolean>;
    private peer: any;
    private partner: any;
    private name: any;
    private connected: boolean = false;

    constructor(private _provider: RoomConfig, private _ws: WebSocketGateway) {
        super();
        if (this._provider.isInitiator) {
            this.name = this._provider.name;
        } else {
            this.name = `${Math.round(Math.random() * 1000)}-${Date.now()}`;
            this.partner = this._provider.name;
        }

        const jsonStream = this._ws.dataStream
            .map((data: any) => JSON.parse(data));

        if (this._provider.isInitiator) {
            jsonStream.filter((data: any) => {
                return data.type === 'start' && data.target === this.name;
            })
                .subscribe((data: any) => {
                    console.log('Handling', data);
                    this.partner = data.source;
                    this.addHandlers();
                });
        } else {
            jsonStream.filter((data: any) => {
                return data.type === 'init' && data.target === this.name;
            })
                .subscribe((data: any) => {
                    console.log('Offering connection', data);
                    this.addHandlers();
                    this.signal({
                        type: 'start',
                        source: this.name,
                        target: this.partner
                    });
                });
        }
        jsonStream.filter((data: any) => {
            return data.type === 'signal';
        }).subscribe((data: any) => {
            this.peer.signal(data.data);
        });
        this._ws.connectionEvents.filter((e: boolean) => e)
            .subscribe(() => {
                this.signal({
                    type: 'init',
                    source: this.name,
                    target: this.partner
                });
            });
    }

    send(command: Command) {
        // Send if connected & drop all others
        // TODO: buffer the input
        if (this.connected) {
            this.peer.send(command.serialize());
        }
        return Observable.create((observer: Observer<any>) => observer.complete());
    }

    private addHandlers() {
        this.peer = new (Peer as any)({ initiator: this._provider.isInitiator });
        this.peer.on('signal', (data: any) => {
            this.signal({
                type: 'signal',
                target: this.partner,
                source: this.name,
                data
            });
        });

        this.peer.on('connect', () => {
            console.log('CONNECT');
            this.connectionEventsEmitter.next(true);
            this.connected = true;
        });

        this.peer.on('data', (data: any) => {
            console.log('got a message from peer: ' + data);
            this.emitter.next(data);
        });

        // Reconnect somehow...
        this.peer.on('error', (err: any) => {
            console.log('error', err);
            this.connectionEventsEmitter.next(false);
        });
    }

    private signal(data: any) {
        let command = new SignalingCommand();
        command.payload = new JsonPayload();
        command.payload.setData(data);
        this._ws.send(command);
    }
}
