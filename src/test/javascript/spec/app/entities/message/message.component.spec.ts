/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { MessageComponent } from '../../../../../../main/webapp/app/entities/message/message.component';
import { MessageService } from '../../../../../../main/webapp/app/entities/message/message.service';
import { Message } from '../../../../../../main/webapp/app/entities/message/message.model';

describe('Component Tests', () => {

    describe('Message Management Component', () => {
        let comp: MessageComponent;
        let fixture: ComponentFixture<MessageComponent>;
        let service: MessageService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [MessageComponent],
                providers: [
                    MessageService
                ]
            })
            .overrideTemplate(MessageComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MessageComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MessageService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Message(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.messages[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
