/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPinterestComponent } from './icon-pinterest.component';

describe('IconPinterestComponent', () => {
    let component: IconPinterestComponent;
    let fixture: ComponentFixture<IconPinterestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconPinterestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconPinterestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
