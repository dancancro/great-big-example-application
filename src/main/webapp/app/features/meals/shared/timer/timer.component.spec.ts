/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TimerComponent } from './timer.component';
import { TimerService } from './timer.service';
import { MockTimerService } from './mock-timer.service.spec';
import { GreatBigExampleApplicationSharedModule } from '../../../../shared/shared.module';
import { MealsSharedModule } from '../../shared/shared.module';
import { StatusBarService } from '../../../../layouts/status-bar/status-bar.service';

describe('TimerComponent', () => {
    let component: TimerComponent;
    let fixture: ComponentFixture<TimerComponent>;
    let mockTimerService: MockTimerService;
    const config: Route[] = [
        { path: '', component: TimerComponent },
        { path: 'test', component: TimerComponent }
    ];
    beforeEach(async(() => {
        mockTimerService = new MockTimerService();
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(config),
                GreatBigExampleApplicationSharedModule,
                MealsSharedModule
            ],
            // declarations: [TimerComponent],
            providers: [
                StatusBarService,
                TimerService,
                { provide: TimerService, useValue: mockTimerService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
