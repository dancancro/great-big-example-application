import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwainService } from './twain.service';
import { TwainComponent } from './twain.component';

describe('TwainComponent', () => {

    let comp: TwainComponent;
    let fixture: ComponentFixture<TwainComponent>;

    let spy: jasmine.Spy;
    let de: DebugElement;
    let el: HTMLElement;
    let twainService: TwainService; // the actually injected service

    const testQuote = 'Test Quote';

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TwainComponent],
            providers: [TwainService],
        });

        fixture = TestBed.createComponent(TwainComponent);
        comp = fixture.componentInstance;

        // TwainService actually injected into the component
        twainService = fixture.debugElement.injector.get(TwainService);

        // Setup spy on the `getQuote` method
        spy = spyOn(twainService, 'getQuote')
            .and.returnValue(Promise.resolve(testQuote));

        // Get the Twain quote element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(By.css('.twain'));
        el = de.nativeElement;
    });

    it('should not show quote before OnInit', () => {
        expect(el.textContent).toBe('', 'nothing displayed');
        expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    });

    it('should still not show quote after component initialized', () => {
        fixture.detectChanges();
        // getQuote service is async => still has not returned with quote
        expect(el.textContent).toBe('...', 'no quote yet');
        expect(spy.calls.any()).toBe(true, 'getQuote called');
    });

    it('should show quote after getQuote promise (async)', async(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => { // wait for async getQuote
            fixture.detectChanges();        // update view with quote
            expect(el.textContent).toBe(testQuote);
        });
    }));

    it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
        fixture.detectChanges();
        tick();                  // wait for async getQuote
        fixture.detectChanges(); // update view with quote
        expect(el.textContent).toBe(testQuote);
    }));

    it('should show quote after getQuote promise (done)', (done) => {
        fixture.detectChanges();

        // get the spy promise and wait for it to resolve
        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges(); // update view with quote
            expect(el.textContent).toBe(testQuote);
            done();
        });
    });
});

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
