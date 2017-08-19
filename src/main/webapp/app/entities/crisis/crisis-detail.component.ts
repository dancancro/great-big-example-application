import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager  } from 'ng-jhipster';

import { Crisis } from './crisis.model';
import { CrisisService } from './crisis.service';

@Component({
    selector: 'jhi-crisis-detail',
    templateUrl: './crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit, OnDestroy {

    crisis: Crisis;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private crisisService: CrisisService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInCrises();
    }

    load(id) {
        this.crisisService.find(id).subscribe((crisis) => {
            this.crisis = crisis;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCrises() {
        this.eventSubscriber = this.eventManager.subscribe(
            'crisisListModification',
            (response) => this.load(this.crisis.id)
        );
    }
}
