/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { ContactComponent } from 'app/entities/contact/contact.component';
import { ContactService } from 'app/entities/contact/contact.service';
import { Contact } from 'app/shared/model/contact.model';

describe('Component Tests', () => {
    describe('Contact Management Component', () => {
        let comp: ContactComponent;
        let fixture: ComponentFixture<ContactComponent>;
        let service: ContactService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ContactComponent],
                providers: []
            })
                .overrideTemplate(ContactComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ContactComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ContactService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Contact(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.contacts[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
