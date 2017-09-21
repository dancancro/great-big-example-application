import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromRoot from '../../core/store';
import { Contact } from '../../core/store/contact/contact.model';
import { User } from '../../core/store/user/user.model';
import * as EntityActions from '../../core/store/entity/entity.actions';
import { slices } from '../../core/store/util';
import { Entities } from '../../core/store/entity/entity.model';
import { Account, Principal } from '../../shared';

@Component({
    selector: 'jhi-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contacts.page.html',
    styleUrls: ['./contacts.page.scss']
})
export class ContactsPage implements OnInit, OnDestroy {
    contact$: Observable<Contact>;

    msg$: Observable<string>;
    user$: Observable<User>;
    contactForm: FormGroup;
    adding: boolean;
    contactSub: Subscription;
    identity$: Promise<Account>;

    constructor(
        private principal: Principal,
        private store: Store<fromRoot.RootState>,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.user$ = this.store.select(fromRoot.getCurrentUser);
        this.msg$ = this.store.select(fromRoot.getMsg);
        this.identity$ = this.principal.identity();
        this.contact$ = this.store.select(fromRoot.getSelectedContact);
        this.contactSub = this.contact$.subscribe((contact) => {
            this.contactForm = this.formBuilder.group({
                name: [contact ? contact.name : '', Validators.required],  // TODO: fix this hack
                id: [contact ? contact.id : '', Validators.required]       // TODO: fix this hack
            });
            this.adding = contact && contact.id !== EntityActions.TEMP
        });
        this.store.dispatch(new EntityActions.Load(slices.CONTACT));
    }

    nextContact() {
        this.store.dispatch(new EntityActions.SelectNext<Contact>(slices.CONTACT));
    }

    newContact() {
        this.store.dispatch(new EntityActions.AddTemp(slices.CONTACT));
    }

    cancel() {
        // this will delete the TEMP entity, then select and display the previous one
        this.store.dispatch(new EntityActions.DeleteTemp(slices.CONTACT));
    }

    onSubmit() {
        if (this.contactForm.value.id === EntityActions.TEMP) {
            this.store.dispatch(new EntityActions.Add(slices.CONTACT,
                this.contactForm.value));
        } else {
            this.store.dispatch(new EntityActions.Patch(slices.CONTACT,
                this.contactForm.value));
        }
    }

    ngOnDestroy() {
        this.contactSub && this.contactSub.unsubscribe();
    }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
