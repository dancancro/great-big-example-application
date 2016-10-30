import 'rxjs/add/operator/let';
import {
    Component,
    ChangeDetectionStrategy,
    OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import { Contact } from '../core/store/contact/contact.model';
import { User } from '../core/store/user/user.model';
import * as contact from '../core/store/contact/contact.actions';
import * as layout from '../core/store/layout/layout.actions';

let uuid = require('node-uuid');

@Component({
    selector: 'app-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'contact.page.html',
    styleUrls: ['contact.page.css']
})
export class ContactPage implements OnInit {
    contacts$: Observable<Contact[]>;

    msg$: Observable<string>;
    user$: Observable<User>;

    constructor(private store: Store<fromRoot.RootState>) {
    }

    ngOnInit() {
        this.user$ = this.store.let(fromRoot.getUser);
        this.msg$ = this.store.let(fromRoot.getMsg);
        this.contacts$ = this.store.let(fromRoot.getContacts);
    }

    nextContact() {
        this.store.dispatch(new contact.NextContactAction());
    }

    newContact() {
        this.store.dispatch(new contact.AddContactAction({
            id: uuid.v1(),
            name: ''
        }));
    }

    onSubmit() {
        this.store.dispatch(new layout.SetMsgAction('Saved contact'))
        setTimeout(() => this.store.dispatch(new layout.SetMsgAction(null)));
    }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/