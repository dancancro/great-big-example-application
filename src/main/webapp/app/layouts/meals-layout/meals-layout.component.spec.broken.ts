/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs/Subject';
import { StoreModule, Store, StateObservable, combineReducers } from '@ngrx/store';

import { MealsLayoutComponent } from './meals-layout.component';
import { CoreModule } from '../../core/core.module';
import { FooterComponent } from '../footer/footer.component';
import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../../features/home/home.component';
import { GreatBigExampleApplicationHomeModule } from '../../features/home/home.module';
import { ApiService } from '../../core/api/api.service';
import { MockApiService } from '../../core/api/mock-api.service.spec';
import { StatusBarService } from '../status-bar/status-bar.service';
import { MockDocumentService } from '../../../mocks/mock-document.service.spec';
import * as fromRoot from '../../core/store';

describe('MealsLayoutComponent', () => {
    const config: Route[] = [
        { path: '', component: HomeComponent },
        { path: 'test', component: HomeComponent, data: { layout: { paddingTop: true } } }
    ];
    let component: MealsLayoutComponent;
    let fixture: ComponentFixture<MealsLayoutComponent>;
    let location: Location;
    let router: Router;
    const mockDocumentService = new MockDocumentService();
    const mockApiService = new MockApiService();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    ...fromRoot.reducers
                }),
                CoreModule,
                GreatBigExampleApplicationHomeModule,
                RouterTestingModule.withRoutes(config)
            ],
            providers: [
                GlobalEventsService,
                StatusBarService,
                { provide: ApiService, useValue: mockApiService },
                { provide: 'Document', useValue: mockDocumentService },
                { provide: 'Window', useValue: window }
            ]
        })
            .compileComponents();
    }));

    beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
        location = _location;
        router = _router;
        fixture = TestBed.createComponent(MealsLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should update padding on Height changes', () => {
        component.onHeightChange('top', 40, 10);
        expect(component.padding.top).toEqual('50');
    });

    it('should set fixed to true on route change', () => {
        router.navigate(['/test']).then(() => {
            expect(location.path()).toBe('/test');
            expect(component.layout['paddingTop']).toBe(true);
        });
    });

});
