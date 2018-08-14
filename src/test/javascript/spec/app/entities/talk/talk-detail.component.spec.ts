/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { TalkDetailComponent } from '../../../../../../main/webapp/app/entities/talk/talk-detail.component';
import { TalkService } from '../../../../../../main/webapp/app/entities/talk/talk.service';
import { Talk } from '../../../../../../main/webapp/app/entities/talk/talk.model';

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
                    TalkService
                ]
            })
            .overrideTemplate(TalkDetailComponent, '')
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

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Talk(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.talk).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
