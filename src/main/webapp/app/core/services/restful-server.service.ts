import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { RestfulGateway } from '../gateways/restful.gateway';
import { BaseAsyncService } from './base.async-service';
import { RestfulCommand } from '../commands/restful.command';

// For command builder take a look at
// +multi-player async-services
@Injectable()
export class RestfulServer extends BaseAsyncService {
    constructor(private restfulGateway: RestfulGateway) {
        super();
    }
    process(data: Action) {
        return this.restfulGateway.send(new RestfulCommand((<any>data).payload));
    }
}
