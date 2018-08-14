/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { AuthorComponent } from '../../../../../../main/webapp/app/entities/author/author.component';
import { AuthorService } from '../../../../../../main/webapp/app/entities/author/author.service';
import { Author } from '../../../../../../main/webapp/app/entities/author/author.model';

describe('Component Tests', () => {

    describe('Author Management Component', () => {
        let comp: AuthorComponent;
        let fixture: ComponentFixture<AuthorComponent>;
        let service: AuthorService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [AuthorComponent],
                providers: [
                    AuthorService
                ]
            })
            .overrideTemplate(AuthorComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AuthorComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AuthorService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Author(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.authors[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
