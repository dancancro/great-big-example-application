/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { TalkComponent } from '../../../../../../main/webapp/app/entities/talk/talk.component';
import { TalkService } from '../../../../../../main/webapp/app/entities/talk/talk.service';
import { Talk } from '../../../../../../main/webapp/app/entities/talk/talk.model';

describe('Component Tests', () => {

    describe('Talk Management Component', () => {
        let comp: TalkComponent;
        let fixture: ComponentFixture<TalkComponent>;
        let service: TalkService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [TalkComponent],
                providers: [
                    TalkService
                ]
            })
            .overrideTemplate(TalkComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TalkComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TalkService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Talk(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.talks[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
