import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { RestfulGateway } from '../../../core/gateways/restful.gateway';
import { AsyncService } from '../../../core/services/base.async-service';
import { RestfulCommand } from '../../../core/commands/restful.command';

// For command builder take a look at
// +multi-player async-services
@Injectable()
export class GameServer extends AsyncService {
    constructor(private restfulGateway: RestfulGateway) {
        super();
    }
    process(data: Action) {
        return this.restfulGateway.send(new RestfulCommand(data.payload));
    }
}
