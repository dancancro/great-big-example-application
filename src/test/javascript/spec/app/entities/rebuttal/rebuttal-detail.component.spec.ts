import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { RebuttalDetailComponent } from '../../../../../../main/webapp/app/entities/rebuttal/rebuttal-detail.component';
import { RebuttalService } from '../../../../../../main/webapp/app/entities/rebuttal/rebuttal.service';
import { Rebuttal } from '../../../../../../main/webapp/app/entities/rebuttal/rebuttal.model';

describe('Component Tests', () => {

    describe('Rebuttal Management Detail Component', () => {
        let comp: RebuttalDetailComponent;
        let fixture: ComponentFixture<RebuttalDetailComponent>;
        let service: RebuttalService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [RebuttalDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    RebuttalService,
                    JhiEventManager
                ]
            }).overrideTemplate(RebuttalDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RebuttalDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RebuttalService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Rebuttal(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.rebuttal).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
