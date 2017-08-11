/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabelsComponent } from '../../shared/labels/labels.component';

describe('LabelsComponent', () => {
    let component: LabelsComponent;
    let fixture: ComponentFixture<LabelsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LabelsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LabelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
