/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTimeComponent } from './icon-time.component';

describe('IconTimeComponent', () => {
    let component: IconTimeComponent;
    let fixture: ComponentFixture<IconTimeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconTimeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconTimeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
