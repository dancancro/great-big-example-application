import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterStateSnapshot, CanActivateChild, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { of } from 'rxjs/observable/of'; // Not sure about this guy
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../core/store';

@Injectable()
export class StoreAndRouterConnectorGuard implements CanActivateChild {
    private lastState: RouterStateSnapshot = null;
    constructor(private store: Store<fromRoot.RootState>) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this.lastState === state) {
            return of(true);
        } else {
            this.lastState = state;
            this.store.dispatch({ type: 'ROUTER_NAVIGATION', payload: state });
        }
    }
}
