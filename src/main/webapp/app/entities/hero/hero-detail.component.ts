import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IHero } from 'app/shared/model/hero.model';

@Component({
    selector: 'jhi-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    hero: IHero;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ hero }) => {
            this.hero = hero;
        });
    }

    previousState() {
        window.history.back();
    }
}
