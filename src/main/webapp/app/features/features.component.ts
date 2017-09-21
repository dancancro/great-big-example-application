import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    ViewChild,
    Input,
    ChangeDetectorRef,
    Renderer,
    ElementRef
} from '@angular/core';
import { Router } from '@angular/router';

import { MdSidenav } from '@angular/material';
import { FeatureMeta, FeaturesService } from './features.service';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'features.component.html',
    styleUrls: ['./features.component.scss']
    // encapsulation: ViewEncapsulation.None
})
export class FeaturesComponent implements OnInit, OnDestroy, AfterViewInit {

    modules: FeatureMeta[] = [];

    @ViewChild('menu') private menu: MdSidenav;

    private _subscription = null;
    private user = undefined;

    constructor(private http: Http,
        // private changeDetectorRef: ChangeDetectorRef,
        // private media: Media,
        element: ElementRef,
        renderer: Renderer,
        private _router: Router,
        private _moduleService: FeaturesService) {
        // Remove loading class to unset default styles
        renderer.setElementClass(element.nativeElement, 'loading', false);
    }

    ngOnInit() {
        this.modules = this._moduleService.getFeatures();
        // this.user = this._socketService.getUser()
    }

    ngAfterViewInit(): any {
    }

    ngOnDestroy(): any {
        // this._subscription.unsubscribe()
    }
}
