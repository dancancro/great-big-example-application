import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
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
  styleUrls: [ 'contact.page.css' ]
})
export class ContactPage {
  contact$:  Observable<Contact>;
  contacts$: Observable<Contact[]>;

  msg$: Observable<string>;
  userName$: Observable<string>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.userName$ = this.store.let(fromRoot.getUserName);
    this.msg$ = this.store.let(fromRoot.getMsg);
    this.contacts$ = store.let(fromRoot.getContacts);
    this.contact$ = store.let(fromRoot.getContact);
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
It seems that in the book collection example, the container components deal only with observables, not the data emitted by them. The contained components do things with the actual data when it's passed to them from the containers and unpacked with the async pipe. Is that by design? Should container components not dig into the observables and touch the actual data?
*/

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/