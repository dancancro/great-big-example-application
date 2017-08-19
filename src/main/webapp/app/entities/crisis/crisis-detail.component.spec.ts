/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { MockActivatedRoute } from '../../../mocks/mock-route.service';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from './crisis.service';
import { Crisis } from '../../entities/crisis/crisis.model';

describe('Component Tests', () => {

    describe('Crisis Management Detail Component', () => {
        let comp: CrisisDetailComponent;
        let fixture: ComponentFixture<CrisisDetailComponent>;
        let service: CrisisService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [CrisisDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({ id: 123 })
                    },
                    CrisisService,
                    JhiEventManager
                ]
            }).overrideTemplate(CrisisDetailComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CrisisDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CrisisService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Crisis(10)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.crisis).toEqual(jasmine.objectContaining({ id: 10 }));
            });
        });
    });

});
