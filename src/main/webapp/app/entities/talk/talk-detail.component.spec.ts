/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { MockActivatedRoute } from '../../../mocks/mock-route.service';
import { TalkDetailComponent } from './talk-detail.component';
import { TalkService } from './talk.service';
import { Talk } from './talk.model';

describe('Component Tests', () => {

    describe('Talk Management Detail Component', () => {
        let comp: TalkDetailComponent;
        let fixture: ComponentFixture<TalkDetailComponent>;
        let service: TalkService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [TalkDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({ id: 123 })
                    },
                    TalkService,
                    JhiEventManager
                ]
            }).overrideTemplate(TalkDetailComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TalkDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TalkService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Talk(10)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.talk).toEqual(jasmine.objectContaining({ id: 10 }));
            });
        });
    });

});
