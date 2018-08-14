/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ContactDetailComponent } from '../../../../../../main/webapp/app/entities/contact/contact-detail.component';
import { ContactService } from '../../../../../../main/webapp/app/entities/contact/contact.service';
import { Contact } from '../../../../../../main/webapp/app/entities/contact/contact.model';

describe('Component Tests', () => {

    describe('Contact Management Detail Component', () => {
        let comp: ContactDetailComponent;
        let fixture: ComponentFixture<ContactDetailComponent>;
        let service: ContactService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ContactDetailComponent],
                providers: [
                    ContactService
                ]
            })
            .overrideTemplate(ContactDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ContactDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ContactService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Contact(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.contact).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
