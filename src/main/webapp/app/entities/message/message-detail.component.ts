import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager  } from 'ng-jhipster';

import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'jhi-message-detail',
    templateUrl: './message-detail.component.html'
})
export class MessageDetailComponent implements OnInit, OnDestroy {

    message: Message;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private messageService: MessageService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMessages();
    }

    load(id) {
        this.messageService.find(id).subscribe((message) => {
            this.message = message;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMessages() {
        this.eventSubscriber = this.eventManager.subscribe(
            'messageListModification',
            (response) => this.load(this.message.id)
        );
    }
}
