import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { Tag } from './tag.model';
import { TagService } from './tag.service';

@Component({
    selector: 'jhi-tag-detail',
    templateUrl: './tag-detail.component.html'
})
export class TagDetailComponent implements OnInit, OnDestroy {

    tag: Tag;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private tagService: TagService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTags();
    }

    load(id) {
        this.tagService.find(id)
            .subscribe((tagResponse: HttpResponse<Tag>) => {
                this.tag = tagResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTags() {
        this.eventSubscriber = this.eventManager.subscribe(
            'tagListModification',
            (response) => this.load(this.tag.id)
        );
    }
}
