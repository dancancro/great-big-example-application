import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CrisisDetailComponent } from '../../../../../../main/webapp/app/entities/crisis/crisis-detail.component';
import { CrisisService } from '../../../../../../main/webapp/app/entities/crisis/crisis.service';
import { Crisis } from '../../../../../../main/webapp/app/entities/crisis/crisis.model';

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
                        useValue: new MockActivatedRoute({id: 123})
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
            expect(comp.crisis).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
