/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImageCoverComponent } from './image-cover.component';
import { LoadingComponent } from '../ui/loading/loading.component';

describe('ImageCoverComponent', () => {
    let component: ImageCoverComponent;
    let fixture: ComponentFixture<ImageCoverComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ImageCoverComponent,
                LoadingComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageCoverComponent);
        component = fixture.componentInstance;
    });

    it('should create if src is defined', () => {
        component.src = 'favicon.ico';
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create if src is undefined', () => {
        component.src = undefined;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
