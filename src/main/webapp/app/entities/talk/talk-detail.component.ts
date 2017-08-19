import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager , JhiDataUtils } from 'ng-jhipster';

import { Talk } from './talk.model';
import { TalkService } from './talk.service';

@Component({
    selector: 'jhi-talk-detail',
    templateUrl: './talk-detail.component.html'
})
export class TalkDetailComponent implements OnInit, OnDestroy {

    talk: Talk;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private dataUtils: JhiDataUtils,
        private talkService: TalkService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTalks();
    }

    load(id) {
        this.talkService.find(id).subscribe((talk) => {
            this.talk = talk;
        });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTalks() {
        this.eventSubscriber = this.eventManager.subscribe(
            'talkListModification',
            (response) => this.load(this.talk.id)
        );
    }
}
