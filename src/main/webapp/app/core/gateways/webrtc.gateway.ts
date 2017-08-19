import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as Peer from 'simple-peer';

import { BaseGateway } from './base.gateway';
import { WebSocketGateway } from './websocket.gateway';
import { Command } from '../commands/base.command';
import { JsonPayload } from '../commands/payloads/json.command.payload';

import { Observer } from 'rxjs/Observer';

export class RoomConfig {
  isInitiator: boolean;
  name: string;
}

class SignalingCommand extends Command { }

// TODO implement disconnect functionality
@Injectable()
export class WebRTCGateway extends BaseGateway {
  public connectionEvents: Observable<boolean>;
  private peer: any;
  private partner: any;
  private name: any;
  private connected = false;

  constructor(private provider: RoomConfig, private ws: WebSocketGateway) {
    super();
    if (this.provider.isInitiator) {
      this.name = this.provider.name;
    } else {
      this.name = `${Math.round(Math.random() * 1000)}-${Date.now()}`;
      this.partner = this.provider.name;
    }

    const jsonStream = this.ws.dataStream
      .map((data: any) => JSON.parse(data));

    if (this.provider.isInitiator) {
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
    this.ws.connectionEvents.filter((e: boolean) => e)
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
    this.peer = new (Peer as any)({ initiator: this.provider.isInitiator });
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
    const command = new SignalingCommand();
    command.payload = new JsonPayload();
    command.payload.setData(data);
    this.ws.send(command);
  }
}
