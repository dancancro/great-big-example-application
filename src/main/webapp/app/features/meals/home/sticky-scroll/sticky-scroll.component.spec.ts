/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, Injectable, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs/Subject';

import { StickyScrollComponent } from './sticky-scroll.component';
import { GlobalEventsService } from '../../../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../../../core/global-events/mock-global-events.service.spec';
import { StatusBarService } from '../../../../layouts/status-bar/status-bar.service';

@Component({
    template: `<c2c-sticky-scroll #stickyScroll [stickyOffset]="stickyOffset"></c2c-sticky-scroll>`
})
export class ContainerComponent {
    stickyOffset = 0;
    @ViewChild('stickyScroll') stickyScroll: StickyScrollComponent;
}

describe('StickyScrollComponent', () => {
    let component: ContainerComponent;
    let fixture: ComponentFixture<ContainerComponent>;
    let mockGlobalEventsService: MockGlobalEventsService;
    const config: Route[] = [
        { path: '', component: ContainerComponent },
        { path: 'test', component: ContainerComponent }
    ];
    beforeEach(async(() => {
        mockGlobalEventsService = new MockGlobalEventsService();
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(config)
            ],
            providers: [
                StatusBarService,
                { provide: GlobalEventsService, useValue: mockGlobalEventsService }
            ],
            declarations: [ContainerComponent, StickyScrollComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.stickyScroll).toBeTruthy();
    });

    it('should set style to fixed', () => {
        component.stickyOffset = -50;
        fixture.detectChanges();
        mockGlobalEventsService.update();
        expect(component.stickyScroll.fixed).toBe(true);
    });

    it('should remove fixed style', () => {
        // Set fixed
        component.stickyOffset = -50;
        fixture.detectChanges();
        expect(component.stickyScroll.fixed).toBe(true);
        // Remove fixed
        component.stickyOffset = 50;
        fixture.detectChanges();
        expect(component.stickyScroll.fixed).toBe(false);
    });

    it('should destroy the component', () => {
        component.stickyOffset = -50;
        fixture.detectChanges();
        expect(component.stickyScroll.fixed).toBe(true);
        component.stickyScroll.ngOnDestroy();
        expect(component.stickyScroll.fixed).toBe(false);
    });

    it('should update the height on manuel check', (done) => {
        component.stickyScroll.height = 5;
        const positionContainer = fixture.nativeElement.getElementsByClassName('position-container')[0];
        positionContainer.style.height = '234px';
        expect(positionContainer.clientHeight).toBe(234);
        expect(component.stickyScroll.height).toBe(5);
        component.stickyScroll.manualHeightCheck();
        setTimeout(() => {
            expect(component.stickyScroll.height).toBe(234);
            done();
        }, 0);
    });
});
