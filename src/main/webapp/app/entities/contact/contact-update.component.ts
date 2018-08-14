import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContact } from 'app/shared/model/contact.model';
import { ContactService } from './contact.service';

@Component({
    selector: 'jhi-contact-update',
    templateUrl: './contact-update.component.html'
})
export class ContactUpdateComponent implements OnInit {
    private _contact: IContact;
    isSaving: boolean;

    constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ contact }) => {
            this.contact = contact;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.contact.id !== undefined) {
            this.subscribeToSaveResponse(this.contactService.update(this.contact));
        } else {
            this.subscribeToSaveResponse(this.contactService.create(this.contact));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IContact>>) {
        result.subscribe((res: HttpResponse<IContact>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get contact() {
        return this._contact;
    }

    set contact(contact: IContact) {
        this._contact = contact;
    }
}
