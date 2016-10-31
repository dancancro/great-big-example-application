import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';

import { Contact } from './contact.model';
import { DataService } from '../data.service';
import * as contact from './contact.actions';

@Injectable()
export class ContactEffects {
    constructor(private store: Store<Contact>,
        private dataService: DataService,
        private action$: Actions) { }

    @Effect()
    load$ = this.action$
        .ofType(contact.ActionTypes.LOAD)
        .startWith(new contact.LoadAction())
        .switchMap(() =>
            this.dataService.getContacts()
                .mergeMap(fetchedContacts => Observable.from(fetchedContacts))
                .map((fetchedContact: Contact) => new contact.LoadSuccessAction(fetchedContact))  // one action per contact
                .catch((error) => Observable.of(new contact.LoadFailAction(error)))
        );

    @Effect()
    update$ = this.action$
        .ofType(contact.ActionTypes.UPDATE_CONTACT,
        contact.ActionTypes.ADD_CONTACT)
        .withLatestFrom(this.store.select('contacts'))
        .switchMap(([{}, contacts]) =>
            Observable   // first element is action, but it isn't used
                .from(contacts.ids)
                .filter((id: string) => contacts.entities[id].dirty)
                .switchMap((id: string) => this.dataService.addOrUpdateContact(contacts.entities[id]))
                .map((responseContact: Contact) => new contact.UpdateContactSuccessAction(responseContact))
        );

}
