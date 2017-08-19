/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMinusComponent } from './icon-minus.component';

describe('IconMinusComponent', () => {
    let component: IconMinusComponent;
    let fixture: ComponentFixture<IconMinusComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconMinusComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconMinusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
