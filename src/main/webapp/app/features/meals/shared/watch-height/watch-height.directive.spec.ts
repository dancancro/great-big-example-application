/* tslint:disable:no-unused-variable */
import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';

import { GlobalEventsService } from '../../../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../../../core/global-events/mock-global-events.service.spec';
import { WatchHeightDirective } from '../../shared/watch-height/watch-height.directive';

@Component({
    template: `<div [style.height]="heightInput" (heightChange)="testOutput = $event" appWatchHeight></div>`
})
export class ContainerComponent {
    heightInput = '101px';
    testOutput;
}

describe('Directive: WatchHeight', () => {
    let fixture: ComponentFixture<ContainerComponent>;
    const mockGlobalEventsService = new MockGlobalEventsService();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: GlobalEventsService, useValue: mockGlobalEventsService }
            ],
            declarations: [ContainerComponent, WatchHeightDirective]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should emit the inital height', () => {
        expect(fixture.componentInstance.testOutput).toBe(0);
    });

    it('should emit an updated height', () => {
        fixture.componentInstance.heightInput = '202px';
        fixture.detectChanges();
        mockGlobalEventsService.update();
        expect(fixture.componentInstance.testOutput).toBe(202);
    });
});
