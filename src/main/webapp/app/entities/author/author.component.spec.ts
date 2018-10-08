/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { AuthorComponent } from 'app/entities/author/author.component';
import { AuthorService } from 'app/entities/author/author.service';
import { Author } from 'app/shared/model/author.model';

describe('Component Tests', () => {
    describe('Author Management Component', () => {
        let comp: AuthorComponent;
        let fixture: ComponentFixture<AuthorComponent>;
        let service: AuthorService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [AuthorComponent],
                providers: []
            })
                .overrideTemplate(AuthorComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AuthorComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AuthorService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Author(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.authors[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
