import { Component, OnInit, ViewContainerRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';

import { JhiLanguageHelper, StateStorageService } from '../../shared';
import * as $ from 'jquery';

// import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from '../../shared/services';
import { BaThemeConfig } from '../../shared/theme/theme.config';
import { layoutPaths } from '../../shared/theme/theme.constants';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html'
})
export class JhiMainComponent implements OnInit, AfterViewInit {

    constructor(
        private jhiLanguageHelper: JhiLanguageHelper,
        // private activatedRoute: ActivatedRoute,
        private router: Router,
        // private $storageService: StateStorageService,
        // private _state: GlobalState,
        private _imageLoader: BaImageLoaderService,
        private _spinner: BaThemeSpinner,
        // private viewContainerRef: ViewContainerRef,
        // private themeConfig: BaThemeConfig,
    ) { }

    whichLayout() {
        return this.router.routerState.snapshot.url.indexOf('meals') > -1 ? 'meals' : 'jhipster';
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'greatBigExampleApplicationApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }

    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

    private _loadImages(): void {

        // register some loaders
        BaThemePreloader.registerLoader(this._imageLoader.load('/content/img/sky-bg.jpg'));
    }

}
