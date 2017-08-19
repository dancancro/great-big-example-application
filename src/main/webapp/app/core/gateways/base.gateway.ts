import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Command } from '../commands/base.command';

export abstract class BaseGateway {
    dataStream: Observable<any>;
    connectionEvents: Observable<boolean>;
    protected emitter: Observer<any>;
    protected connectionEventsEmitter: Observer<boolean>;

    constructor() {
        this.dataStream = new Observable<any>((emitter: Observer<any>) => {
            this.emitter = emitter;
        }).share();
        this.connectionEvents = new Observable<boolean>((obs: Observer<boolean>) => {
            this.connectionEventsEmitter = obs;
        }).share();
    }

    abstract send(command: Command): Observable<any>;
}
