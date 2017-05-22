import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BaseFacade } from '../base/base.facade';

@Injectable()
export class P2PGameFacade extends BaseFacade {
    p2pGame$: Observable<any>;

    constructor(protected _store: Store<any>) {
        super([]);
        this.p2pGame$ = this._store.select('p2pGame');
    }
}
