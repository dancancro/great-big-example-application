import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Hero } from './hero.model';
import { HeroPopupService } from './hero-popup.service';
import { HeroService } from './hero.service';

@Component({
    selector: 'jhi-hero-dialog',
    templateUrl: './hero-dialog.component.html'
})
export class HeroDialogComponent implements OnInit {

    hero: Hero;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private heroService: HeroService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.hero.id !== undefined) {
            this.subscribeToSaveResponse(
                this.heroService.update(this.hero));
        } else {
            this.subscribeToSaveResponse(
                this.heroService.create(this.hero));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Hero>>) {
        result.subscribe((res: HttpResponse<Hero>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Hero) {
        this.eventManager.broadcast({ name: 'heroListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-hero-popup',
    template: ''
})
export class HeroPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private heroPopupService: HeroPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.heroPopupService
                    .open(HeroDialogComponent as Component, params['id']);
            } else {
                this.heroPopupService
                    .open(HeroDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
