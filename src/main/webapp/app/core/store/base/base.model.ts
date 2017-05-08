import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeAll';

import { AsyncService } from '../../services/base.async-service';

export abstract class Model {
    constructor(private services: AsyncService[]) { }
    protected performAsyncAction(action: Action) {
        return Observable.merge.apply(Observable, (this.services || []).map((s) => s.process(action)));
    }
}
