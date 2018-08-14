import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRebuttal } from 'app/shared/model/rebuttal.model';

@Component({
    selector: 'jhi-rebuttal-detail',
    templateUrl: './rebuttal-detail.component.html'
})
export class RebuttalDetailComponent implements OnInit {
    rebuttal: IRebuttal;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ rebuttal }) => {
            this.rebuttal = rebuttal;
        });
    }

    previousState() {
        window.history.back();
    }
}
