import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ClaimRebuttalDetailComponent } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal-detail.component';
import { ClaimRebuttalService } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal.service';
import { ClaimRebuttal } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal.model';

describe('Component Tests', () => {

    describe('ClaimRebuttal Management Detail Component', () => {
        let comp: ClaimRebuttalDetailComponent;
        let fixture: ComponentFixture<ClaimRebuttalDetailComponent>;
        let service: ClaimRebuttalService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimRebuttalDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ClaimRebuttalService,
                    JhiEventManager
                ]
            }).overrideTemplate(ClaimRebuttalDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClaimRebuttalDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimRebuttalService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new ClaimRebuttal(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.claimRebuttal).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
