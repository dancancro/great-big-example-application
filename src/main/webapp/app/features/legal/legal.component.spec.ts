/* tslint:disable:no-unused-variable */
import { DebugElement, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LegalComponent } from './legal.component';

@Injectable()
export class MockActivatedRoute extends ActivatedRoute {
    snapshot: any;
    constructor() {
        super();
        this.defaultRoute();
    }
    defaultRoute() {
        this.snapshot = {
            url: [{ path: 'term' }]
        };
    }
}

describe('LegalComponent', () => {
    let component: LegalComponent;
    let fixture: ComponentFixture<LegalComponent>;
    let mockActivatedRoute: MockActivatedRoute;
    const config: Route[] = [
        { path: '', component: LegalComponent }
    ];
    beforeEach(async(() => {
        mockActivatedRoute = new MockActivatedRoute();
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(config)],
            declarations: [LegalComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LegalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
