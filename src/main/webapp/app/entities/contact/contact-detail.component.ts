import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IContact } from 'app/shared/model/contact.model';

@Component({
    selector: 'jhi-contact-detail',
    templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
    contact: IContact;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ contact }) => {
            this.contact = contact;
        });
    }

    previousState() {
        window.history.back();
    }
}
