/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SkipNavComponent } from './skip-nav.component';
import { MockRouter } from '../../../mocks/mock-router.spec';

describe('SkipNavComponent', () => {
    let component: SkipNavComponent;
    let fixture: ComponentFixture<SkipNavComponent>;
    let mockRouter: MockRouter;
    beforeEach(async(() => {
        mockRouter = new MockRouter();
        TestBed.configureTestingModule({
            declarations: [SkipNavComponent],
            providers: [
                { provide: Router, useValue: mockRouter }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkipNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set the label after skipping the main content', () => {
        component.skipNavigation();
        expect(component.skipLabel).toBe('You have skipped to the main content');
    });

    it('should automatically skip to the main content', () => {
        const testEvent = new NavigationEnd(1, '/test', '/test');
        mockRouter.fakeEvent(testEvent);
        mockRouter.fakeEvent(testEvent);
        expect(component.skipLabel).toBe('Skipping to the main content');
    });

    it('should not set the current route if not an instance of NavigationEnd', () => {
        const testEvent = { id: 1, url: '/test', urlAfterRedirect: '/test' };
        mockRouter.fakeEvent(testEvent);
        mockRouter.fakeEvent(testEvent);
        expect(component.skipLabel).toBe(undefined);
    });

    it('should set startContentIndex to null on blur', () => {
        component.startContentIndex = 1;
        component.startContentBlur();
        expect(component.startContentIndex).toBe(null);
    });
});
