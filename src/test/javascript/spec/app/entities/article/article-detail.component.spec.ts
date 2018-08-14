/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ArticleDetailComponent } from '../../../../../../main/webapp/app/entities/article/article-detail.component';
import { ArticleService } from '../../../../../../main/webapp/app/entities/article/article.service';
import { Article } from '../../../../../../main/webapp/app/entities/article/article.model';

describe('Component Tests', () => {

    describe('Article Management Detail Component', () => {
        let comp: ArticleDetailComponent;
        let fixture: ComponentFixture<ArticleDetailComponent>;
        let service: ArticleService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ArticleDetailComponent],
                providers: [
                    ArticleService
                ]
            })
            .overrideTemplate(ArticleDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ArticleDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ArticleService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Article(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.article).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
