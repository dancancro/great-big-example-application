import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';

@Component({
    selector: 'jhi-claim-rebuttal-detail',
    templateUrl: './claim-rebuttal-detail.component.html'
})
export class ClaimRebuttalDetailComponent implements OnInit {
    claimRebuttal: IClaimRebuttal;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ claimRebuttal }) => {
            this.claimRebuttal = claimRebuttal;
        });
    }

    previousState() {
        window.history.back();
    }
}
