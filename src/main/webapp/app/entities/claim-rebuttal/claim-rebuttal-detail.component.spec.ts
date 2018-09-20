/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { ClaimRebuttalDetailComponent } from 'app/entities/claim-rebuttal/claim-rebuttal-detail.component';
import { ClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';

describe('Component Tests', () => {
    describe('ClaimRebuttal Management Detail Component', () => {
        let comp: ClaimRebuttalDetailComponent;
        let fixture: ComponentFixture<ClaimRebuttalDetailComponent>;
        const route = ({ data: of({ claimRebuttal: new ClaimRebuttal(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimRebuttalDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ClaimRebuttalDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ClaimRebuttalDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.claimRebuttal).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
