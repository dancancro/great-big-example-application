import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IClaim } from 'app/shared/model/claim.model';

@Component({
    selector: 'jhi-claim-detail',
    templateUrl: './claim-detail.component.html'
})
export class ClaimDetailComponent implements OnInit {
    claim: IClaim;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ claim }) => {
            this.claim = claim;
        });
    }

    previousState() {
        window.history.back();
    }
}
