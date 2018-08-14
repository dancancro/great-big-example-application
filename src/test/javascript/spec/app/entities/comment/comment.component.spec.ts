/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { CommentComponent } from '../../../../../../main/webapp/app/entities/comment/comment.component';
import { CommentService } from '../../../../../../main/webapp/app/entities/comment/comment.service';
import { Comment } from '../../../../../../main/webapp/app/entities/comment/comment.model';

describe('Component Tests', () => {

    describe('Comment Management Component', () => {
        let comp: CommentComponent;
        let fixture: ComponentFixture<CommentComponent>;
        let service: CommentService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [CommentComponent],
                providers: [
                    CommentService
                ]
            })
            .overrideTemplate(CommentComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CommentComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CommentService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Comment(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.comments[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
