import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { MockActivatedRoute } from '../../../mocks/mock-route.service';
import { CommentDetailComponent } from './comment-detail.component';
import { CommentService } from './comment.service';
import { Comment } from './comment.model';

describe('Component Tests', () => {

    describe('Comment Management Detail Component', () => {
        let comp: CommentDetailComponent;
        let fixture: ComponentFixture<CommentDetailComponent>;
        let service: CommentService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [CommentDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({ id: 123 })
                    },
                    CommentService,
                    JhiEventManager
                ]
            }).overrideTemplate(CommentDetailComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CommentDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CommentService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Comment(10)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.comment).toEqual(jasmine.objectContaining({ id: 10 }));
            });
        });
    });

});
