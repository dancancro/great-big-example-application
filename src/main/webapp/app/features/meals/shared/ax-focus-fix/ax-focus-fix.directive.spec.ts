/* tslint:disable:no-unused-variable */
import { Component, HostBinding, Injectable, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AxFocusFixDirective } from './ax-focus-fix.directive';
import { GlobalEventsService } from '../../../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../../../core/global-events/mock-global-events.service.spec';
import { MockDocumentService } from '../../../../../mocks/mock-document.service.spec';
import { MockWindowService } from '../../../../../mocks/mock-window.service.spec';
import { MockRouter } from '../../../../../mocks/mock-router.spec';

@Component({
    template: `<div #testEl appAxFocus01Fix></div>`
})
export class ContainerComponent {
    @ViewChild('testEl') testEl;
    @ViewChild(AxFocusFixDirective) axFocus01Fix: AxFocusFixDirective;
}

describe('Directive: appAxFocus01Fix', () => {
    let component: ContainerComponent;
    let fixture: ComponentFixture<ContainerComponent>;
    let mockDocumentService: MockDocumentService;
    let mockGlobalEventsService: MockGlobalEventsService;
    let mockWindowService: MockWindowService;
    let mockRouter: MockRouter;
    function mockScrollTo(x, y) {
        mockWindowService.pageYOffset = y;
        mockGlobalEventsService.update();
    }
    beforeEach(async(() => {
        mockRouter = new MockRouter();
        mockDocumentService = new MockDocumentService();
        mockGlobalEventsService = new MockGlobalEventsService();
        mockWindowService = new MockWindowService();
        TestBed.configureTestingModule({
            providers: [
                { provide: 'Document', useValue: mockDocumentService },
                { provide: GlobalEventsService, useValue: mockGlobalEventsService },
                { provide: Router, useValue: mockRouter },
                { provide: 'Window', useValue: mockWindowService }
            ],
            declarations: [AxFocusFixDirective, ContainerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        mockScrollTo(0, 15); // start with scroll
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should not set aria-hidden to false on a non-tab keydown', () => {
        const child = fixture.nativeElement.firstElementChild;
        expect(child.getAttribute('aria-hidden')).toBe('true');
        mockDocumentService.newEvent('keydown', { keyCode: 4 });
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('true');
    });

    it('should set aria-hidden to false on a tab keydown', () => {
        const child = fixture.nativeElement.firstElementChild;
        expect(child.getAttribute('aria-hidden')).toBe('true');
        mockDocumentService.newEvent('keydown', { keyCode: 9 });
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('false');
    });

    it('should not set aria-hidden to true on a non-tab keyup', () => {
        const child = fixture.nativeElement.firstElementChild;
        // Prepare test => set globals
        mockScrollTo(5, 7);
        expect(mockWindowService.pageYOffset).toBe(7);
        // Prepare test => tab keydown
        mockDocumentService.newEvent('keydown', { keyCode: 9 });
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('false');
        // Run test => non-tab keyup
        mockDocumentService.newEvent('keyup', { keyCode: 4 });
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('false');
        expect(mockWindowService.pageYOffset).toBe(7);
    });

    it('should set aria-hidden to true on a tab keyup', () => {
        const child = fixture.nativeElement.firstElementChild;
        // Prepare test => tab keydown
        mockDocumentService.newEvent('keydown', { keyCode: 9 });
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('false');
        // Run test => tab keyup
        mockDocumentService.newEvent('keyup', { keyCode: 9 });
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('true');
    });

    it(`should set window offset to 0, and
      not set aria-hidden to true on a tab  with focus`, () => {
            const child = fixture.nativeElement.firstElementChild;
            // Prepare test => set globals
            mockDocumentService.setActiveElement(child);
            mockScrollTo(0, 7);
            expect(mockWindowService.pageYOffset).toBe(7);
            // Prepare test => tab keydown
            mockDocumentService.newEvent('keydown', { keyCode: 9 });
            fixture.detectChanges();
            expect(child.getAttribute('aria-hidden')).toBe('false');
            // Run test => tab keyup
            mockDocumentService.newEvent('keyup', { keyCode: 9 });
            fixture.detectChanges();
            expect(child.getAttribute('aria-hidden')).toBe('false');
            expect(mockWindowService.pageYOffset).toBe(0);
        });

    it('should set aria-hidden to false on scrollTop', () => {
        const child = fixture.nativeElement.firstElementChild;
        expect(child.getAttribute('aria-hidden')).toBe('true');
        // Run test => tab keyup
        mockScrollTo(0, 0);
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('false');
    });

    it('should set aria-hidden to true on scroll down', () => {
        const child = fixture.nativeElement.firstElementChild;
        // Prepare test => set scroll to 0
        mockScrollTo(0, 0);
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('false');
        // Run test
        mockScrollTo(0, 228);
        fixture.detectChanges();
        expect(child.getAttribute('aria-hidden')).toBe('true');
    });

    it('should skip non-home routes', () => {
        let testEvent: NavigationEnd;
        testEvent = new NavigationEnd(1, '/test', '/test');
        mockRouter.fakeEvent(testEvent);
        expect(component.axFocus01Fix.skipRoute).toBe(true);
        testEvent = new NavigationEnd(1, '/', '/');
        mockRouter.fakeEvent(testEvent);
        expect(component.axFocus01Fix.skipRoute).toBe(false);
    });

    it('should not do nothing if not an instance of NavigationEnd', () => {
        const testEvent = { id: 1, url: '/test', urlAfterRedirect: '/test' };
        mockRouter.fakeEvent(testEvent);
        expect(component.axFocus01Fix.skipRoute).toBe(undefined);
    });
});
