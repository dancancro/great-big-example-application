import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from 'app/shared/model/hero.model';
import { HeroService } from './hero.service';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroUpdateComponent } from './hero-update.component';
import { HeroDeletePopupComponent } from './hero-delete-dialog.component';
import { IHero } from 'app/shared/model/hero.model';

@Injectable({ providedIn: 'root' })
export class HeroResolve implements Resolve<IHero> {
    constructor(private service: HeroService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((hero: HttpResponse<Hero>) => hero.body));
        }
        return of(new Hero());
    }
}

export const heroRoute: Routes = [
    {
        path: 'hero',
        component: HeroComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'hero/:id/view',
        component: HeroDetailComponent,
        resolve: {
            hero: HeroResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'hero/new',
        component: HeroUpdateComponent,
        resolve: {
            hero: HeroResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'hero/:id/edit',
        component: HeroUpdateComponent,
        resolve: {
            hero: HeroResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const heroPopupRoute: Routes = [
    {
        path: 'hero/:id/delete',
        component: HeroDeletePopupComponent,
        resolve: {
            hero: HeroResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
