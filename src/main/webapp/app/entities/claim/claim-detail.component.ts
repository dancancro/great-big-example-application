import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { Claim } from './claim.model';
import { ClaimService } from './claim.service';

@Component({
    selector: 'jhi-claim-detail',
    templateUrl: './claim-detail.component.html'
})
export class ClaimDetailComponent implements OnInit, OnDestroy {

    claim: Claim;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private claimService: ClaimService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInClaims();
    }

    load(id) {
        this.claimService.find(id)
            .subscribe((claimResponse: HttpResponse<Claim>) => {
                this.claim = claimResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInClaims() {
        this.eventSubscriber = this.eventManager.subscribe(
            'claimListModification',
            (response) => this.load(this.claim.id)
        );
    }
}
