import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Contact, initialContact } from './contact.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';
import { EntityAction } from '../entity/entity.actions';

@Injectable()
export class ContactEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.CONTACT, this.dataService, this.store, initialContact);
    @Effect()
    private updateToRemote$ = entityFunctions.updateToRemote$(this.actions$, slices.CONTACT, this.dataService, this.store, initialContact);
    @Effect()
    private addToRemote$ = entityFunctions.addToRemote$(this.actions$, slices.CONTACT, this.dataService, this.store, initialContact);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions<EntityAction<Contact>>,
        private dataService: RESTService
    ) { }
}
