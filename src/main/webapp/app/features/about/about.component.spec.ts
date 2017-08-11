/* tslint:disable:no-unused-variable */
import { DebugElement, EventEmitter, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';
import { ApiService } from '../../core/api/api.service';
import { ImageCoverComponent } from '../../shared/image-cover/image-cover.component';
import { LoadingComponent } from '../../shared/ui/loading/loading.component';

@Injectable()
export class MockApiService extends ApiService {
    about;
    recipes;
    filterOptions;
    latest;
    constructor() {
        super(null);
        this.onInit();
    }
    onInit() {
        this.about = new EventEmitter();
        this.recipes = new EventEmitter();
        this.filterOptions = new EventEmitter();
        this.latest = new EventEmitter();
    }
}

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;
    let mockApiService: MockApiService;
    beforeEach(async(() => {
        mockApiService = new MockApiService();
        TestBed.configureTestingModule({
            declarations: [
                AboutComponent,
                ImageCoverComponent,
                LoadingComponent
            ],
            providers: [
                { provide: ApiService, useValue: mockApiService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
