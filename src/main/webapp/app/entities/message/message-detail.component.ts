import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMessage } from 'app/shared/model/message.model';

@Component({
    selector: 'jhi-message-detail',
    templateUrl: './message-detail.component.html'
})
export class MessageDetailComponent implements OnInit {
    message: IMessage;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ message }) => {
            this.message = message;
        });
    }

    previousState() {
        window.history.back();
    }
}
