import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Model } from '../base/base.model';

@Injectable()
export class P2PGameModel extends Model {
    p2pGame$: Observable<any>;

    constructor(protected _store: Store<any>) {
        super([]);
        this.p2pGame$ = this._store.select('p2pGame');
    }
}
