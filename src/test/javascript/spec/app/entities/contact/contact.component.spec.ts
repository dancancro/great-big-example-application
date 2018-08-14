/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ContactComponent } from '../../../../../../main/webapp/app/entities/contact/contact.component';
import { ContactService } from '../../../../../../main/webapp/app/entities/contact/contact.service';
import { Contact } from '../../../../../../main/webapp/app/entities/contact/contact.model';

describe('Component Tests', () => {

    describe('Contact Management Component', () => {
        let comp: ContactComponent;
        let fixture: ComponentFixture<ContactComponent>;
        let service: ContactService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ContactComponent],
                providers: [
                    ContactService
                ]
            })
            .overrideTemplate(ContactComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ContactComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ContactService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Contact(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.contacts[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
