/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ClaimComponent } from '../../../../../../main/webapp/app/entities/claim/claim.component';
import { ClaimService } from '../../../../../../main/webapp/app/entities/claim/claim.service';
import { Claim } from '../../../../../../main/webapp/app/entities/claim/claim.model';

describe('Component Tests', () => {

    describe('Claim Management Component', () => {
        let comp: ClaimComponent;
        let fixture: ComponentFixture<ClaimComponent>;
        let service: ClaimService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimComponent],
                providers: [
                    ClaimService
                ]
            })
            .overrideTemplate(ClaimComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClaimComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Claim(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.claims[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
