/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconNavComponent } from './icon-nav.component';

describe('IconNavComponent', () => {
    let component: IconNavComponent;
    let fixture: ComponentFixture<IconNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconNavComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
