import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { MessageDetailComponent } from '../../../../../../main/webapp/app/entities/message/message-detail.component';
import { MessageService } from '../../../../../../main/webapp/app/entities/message/message.service';
import { Message } from '../../../../../../main/webapp/app/entities/message/message.model';

describe('Component Tests', () => {

    describe('Message Management Detail Component', () => {
        let comp: MessageDetailComponent;
        let fixture: ComponentFixture<MessageDetailComponent>;
        let service: MessageService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [MessageDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    MessageService,
                    JhiEventManager
                ]
            }).overrideTemplate(MessageDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MessageDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MessageService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Message(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.message).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
