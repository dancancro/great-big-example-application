/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconInstagramComponent } from './icon-instagram.component';

describe('IconInstagramComponent', () => {
    let component: IconInstagramComponent;
    let fixture: ComponentFixture<IconInstagramComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconInstagramComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconInstagramComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
