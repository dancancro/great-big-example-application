import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../core/store';
import { Claim } from '../../core/store/claim/claim.model';

@Injectable()
export class ClaimsResolver implements Resolve<Claim[]> {
    constructor(private store: Store<fromRoot.RootState>) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<Claim[]> {
        console.log('HELLOOOOOOOOOOOOOO');
        return this.store.select(fromRoot.getDeepClaims).toPromise().then((deepClaims) => {
            if (deepClaims) {
                console.log('YES FIND SOMETHING');
                return deepClaims;
            } else {
                console.log('NO FIND NOTHING');
                return null;
            }
        })
            .catch((err) => {
                console.log('ERROR: ' + err);
                return null;
            });
    }
}
