import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager , JhiLanguageService  } from 'ng-jhipster';

import { Claim } from './claim.model';
import { ClaimService } from './claim.service';

@Component({
    selector: 'jhi-claim-detail',
    templateUrl: './claim-detail.component.html'
})
export class ClaimDetailComponent implements OnInit, OnDestroy {

    claim: Claim;
    private subscription: any;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private jhiLanguageService: JhiLanguageService,
        private claimService: ClaimService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['claim']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInClaims();
    }

    load(id) {
        this.claimService.find(id).subscribe((claim) => {
            this.claim = claim;
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
        this.eventSubscriber = this.eventManager.subscribe('claimListModification', (response) => this.load(this.claim.id));
    }
}
