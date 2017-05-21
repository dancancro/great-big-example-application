import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeAll';

import { BaseAsyncService } from '../../services/base.async-service';

export abstract class BaseFacade {
    constructor(private services: BaseAsyncService[]) { }
    protected performAsyncAction(action: Action) {
        return Observable.merge.apply(Observable, (this.services || []).map((s) => s.process(action)));
    }
}
