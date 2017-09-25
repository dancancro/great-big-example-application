import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { RESTService } from './rest.service';
import * as fromRoot from '../store';
import { slices } from '../store/util';
import * as EntityActions from '../store/entity/entity.actions';
import { RootState } from '../store';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class EntityExistsGuard implements CanActivate {
    constructor(
        private store: Store<fromRoot.RootState>,
        private dataService: RESTService,
        private router: Router
    ) { }

    // From https://toddmotto.com/preloading-ngrx-store-route-guards
    getFromStoreOrAPI(slice: keyof RootState, id: string): Observable<any> {
        return this.store
            .select(fromRoot.getEntityState(slice))
            .do((entities: any) => {
                if (entities.entities[id]) {
                    this.store.dispatch(new EntityActions.Select(slice, { id }));
                } else {
                    this.store.dispatch(new EntityActions.Load(slice, { id }));
                }
            })
            .switchMap((entities) => {
                return entities.ids.map((id) => entities.entities[id]);
            })
            .filter((entity: any) => {
                return '' + entity.id === '' + id;
            })
            .take(1);
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const slice = route.data['slice'];
        const id = route.params['id'] || route.params['slug'] || route.params['username'];
        return this.getFromStoreOrAPI(slice, id)
            .switchMap(() => of(true))
            .catch(() => of(false));
    }
}
