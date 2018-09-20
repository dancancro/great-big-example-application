/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { ClaimRebuttalComponent } from 'app/entities/claim-rebuttal/claim-rebuttal.component';
import { ClaimRebuttalService } from 'app/entities/claim-rebuttal/claim-rebuttal.service';
import { ClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';

describe('Component Tests', () => {
    describe('ClaimRebuttal Management Component', () => {
        let comp: ClaimRebuttalComponent;
        let fixture: ComponentFixture<ClaimRebuttalComponent>;
        let service: ClaimRebuttalService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimRebuttalComponent],
                providers: []
            })
                .overrideTemplate(ClaimRebuttalComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ClaimRebuttalComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimRebuttalService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new ClaimRebuttal(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.claimRebuttals[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
