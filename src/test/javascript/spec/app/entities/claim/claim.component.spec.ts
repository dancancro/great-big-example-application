/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ClaimComponent } from 'app/entities/claim/claim.component';
import { ClaimService } from 'app/entities/claim/claim.service';
import { Claim } from 'app/shared/model/claim.model';

describe('Component Tests', () => {
    describe('Claim Management Component', () => {
        let comp: ClaimComponent;
        let fixture: ComponentFixture<ClaimComponent>;
        let service: ClaimService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimComponent],
                providers: []
            })
                .overrideTemplate(ClaimComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ClaimComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Claim(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.claims[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
