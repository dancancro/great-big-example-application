import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ClaimDetailComponent } from '../../../../../../main/webapp/app/entities/claim/claim-detail.component';
import { ClaimService } from '../../../../../../main/webapp/app/entities/claim/claim.service';
import { Claim } from '../../../../../../main/webapp/app/entities/claim/claim.model';

describe('Component Tests', () => {

    describe('Claim Management Detail Component', () => {
        let comp: ClaimDetailComponent;
        let fixture: ComponentFixture<ClaimDetailComponent>;
        let service: ClaimService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ClaimService,
                    EventManager
                ]
            }).overrideComponent(ClaimDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClaimDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Claim(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.claim).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
