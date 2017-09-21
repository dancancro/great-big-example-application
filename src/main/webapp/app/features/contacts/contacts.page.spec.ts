// derived from https://gist.github.com/brandonroberts/a7faa171760aacbd7a53ec3d3342304c
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import * as fromRoot from '../../core/store';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { ContactsPage } from './contacts.page';
import { CoreModule } from '../../core/core.module';
import { customHttpProvider } from '../../core/interceptor/http.provider';
import { reducers, metaReducers, developmentReducerFactory } from '../../core/store';

describe('ContactPage', () => {
    let component: ContactsPage;
    let fixture: ComponentFixture<ContactsPage>;
    let debugElement: DebugElement;
    let store: Store<fromRoot.RootState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                GreatBigExampleApplicationTestModule,
                GreatBigExampleApplicationSharedModule,
                CoreModule,
                StoreModule.forRoot(reducers, { metaReducers }),
                RouterTestingModule,
                ReactiveFormsModule
            ],
            declarations: [ContactsPage],
            schemas: [
                NO_ERRORS_SCHEMA // ignore unknown elements
            ],
            providers: [
                LocalStorageService,
                SessionStorageService
            ]
        }).overrideComponent(ContactsPage, {
            set: {
                styleUrls: []
                // I assume you can do the same for templateUrl here
            }
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactsPage);
        store = TestBed.get(Store);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create an instance of ContactPage', () => {
        expect(component).toBeTruthy();
    });

});
