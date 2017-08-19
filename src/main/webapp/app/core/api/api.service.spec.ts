/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { AngularFireOffline } from 'angularfire2-offline';
import { MockAngularFireOffline } from './mock-firebase-cache.service.spec';

describe('Service: ApiService', () => {
    let mockAngularFireOffline: MockAngularFireOffline;
    beforeEach(() => {
        mockAngularFireOffline = new MockAngularFireOffline();
        TestBed.configureTestingModule({
            providers: [
                ApiService,
                { provide: AngularFireOffline, useValue: mockAngularFireOffline },
            ]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('should create the service', inject([ApiService], (service: ApiService) => {
        expect(service).toBeTruthy();
    }));

    it('should return a recipe', async(inject([ApiService], (service: ApiService) => {
        service.slugToRecipe('slug-2').subscribe((recipe) => {
            expect(recipe['id']).toEqual(2);
        });
        mockAngularFireOffline.update();
        mockAngularFireOffline.database.list('asdf');
    })));

    it('should return the latest recipe', async(inject([ApiService], (service: ApiService) => {
        service.latest.subscribe((latest) => {
            expect(latest['slug']).toEqual('slug-3');
        });
        mockAngularFireOffline.update();
    })));
});
