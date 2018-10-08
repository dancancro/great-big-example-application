import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICrisis } from 'app/shared/model/crisis.model';

@Component({
    selector: 'jhi-crisis-detail',
    templateUrl: './crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {
    crisis: ICrisis;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ crisis }) => {
            this.crisis = crisis;
        });
    }

    previousState() {
        window.history.back();
    }
}
