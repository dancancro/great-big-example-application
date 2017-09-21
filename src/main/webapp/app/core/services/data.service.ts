import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RootState } from '../store';
import { Entity } from '../store/entity/entity.model';
import { QueryPayload } from '../store/util';

export interface DataService {
    add(slice: keyof RootState, obj: Entity, state: RootState, store: Store<RootState>): any,
    update(slice: keyof RootState, obj: Entity, state: RootState, store: Store<RootState>): any,
    remove(slice: keyof RootState, obj: Entity, state: RootState, store: Store<RootState>): any,
    getEntity(slice: keyof RootState, id: string, state: RootState, store: Store<RootState>): any,
    getEntities(table: keyof RootState, query: QueryPayload, state: RootState): Observable<Entity[]>
}
