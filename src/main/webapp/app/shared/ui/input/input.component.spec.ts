/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputComponent } from './input.component';
import { IconSearchComponent } from '../icons/icon-search/icon-search.component';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconSearchComponent, InputComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set the input value', () => {
        const initialValue = fixture.nativeElement.firstElementChild.value;
        expect(initialValue).toBe('');
        component.set('new value');
        fixture.detectChanges();
        const newValue = fixture.nativeElement.firstElementChild.value;
        expect(newValue).toBe('new value');
    });

    it('shuld get the input value', () => {
        expect(component.get()).toBe('');
        fixture.nativeElement.firstElementChild.value = 'new value';
        fixture.detectChanges();
        expect(component.get()).toBe('new value');
    });
});
