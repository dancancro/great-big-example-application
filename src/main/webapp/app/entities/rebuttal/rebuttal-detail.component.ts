import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { Rebuttal } from './rebuttal.model';
import { RebuttalService } from './rebuttal.service';

@Component({
    selector: 'jhi-rebuttal-detail',
    templateUrl: './rebuttal-detail.component.html'
})
export class RebuttalDetailComponent implements OnInit, OnDestroy {

    rebuttal: Rebuttal;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private rebuttalService: RebuttalService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInRebuttals();
    }

    load(id) {
        this.rebuttalService.find(id)
            .subscribe((rebuttalResponse: HttpResponse<Rebuttal>) => {
                this.rebuttal = rebuttalResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInRebuttals() {
        this.eventSubscriber = this.eventManager.subscribe(
            'rebuttalListModification',
            (response) => this.load(this.rebuttal.id)
        );
    }
}
