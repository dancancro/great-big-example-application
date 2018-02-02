/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
import { Article } from './article.model';

describe('Component Tests', () => {

    describe('Article Management Component', () => {
        let comp: ArticleComponent;
        let fixture: ComponentFixture<ArticleComponent>;
        let service: ArticleService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ArticleComponent],
                providers: [
                    ArticleService
                ]
            })
                .overrideTemplate(ArticleComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ArticleComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ArticleService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Article(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.articles[0]).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });

});
