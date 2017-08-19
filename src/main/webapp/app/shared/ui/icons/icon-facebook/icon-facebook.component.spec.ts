/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFacebookComponent } from './icon-facebook.component';

describe('IconFacebookComponent', () => {
    let component: IconFacebookComponent;
    let fixture: ComponentFixture<IconFacebookComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconFacebookComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconFacebookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
