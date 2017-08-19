/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconArrowDownComponent } from './icon-arrow-down.component';

describe('IconArrowDownComponent', () => {
    let component: IconArrowDownComponent;
    let fixture: ComponentFixture<IconArrowDownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconArrowDownComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconArrowDownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
