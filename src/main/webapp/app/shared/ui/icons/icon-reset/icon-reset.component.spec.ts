/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconResetComponent } from './icon-reset.component';

describe('IconResetComponent', () => {
    let component: IconResetComponent;
    let fixture: ComponentFixture<IconResetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconResetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconResetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
