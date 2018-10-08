import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IHero } from 'app/shared/model/hero.model';
import { HeroService } from './hero.service';

@Component({
    selector: 'jhi-hero-update',
    templateUrl: './hero-update.component.html'
})
export class HeroUpdateComponent implements OnInit {
    private _hero: IHero;
    isSaving: boolean;

    constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ hero }) => {
            this.hero = hero;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.hero.id !== undefined) {
            this.subscribeToSaveResponse(this.heroService.update(this.hero));
        } else {
            this.subscribeToSaveResponse(this.heroService.create(this.hero));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IHero>>) {
        result.subscribe((res: HttpResponse<IHero>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get hero() {
        return this._hero;
    }

    set hero(hero: IHero) {
        this._hero = hero;
    }
}
