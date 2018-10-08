/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { RebuttalDetailComponent } from 'app/entities/rebuttal/rebuttal-detail.component';
import { Rebuttal } from 'app/shared/model/rebuttal.model';

describe('Component Tests', () => {
    describe('Rebuttal Management Detail Component', () => {
        let comp: RebuttalDetailComponent;
        let fixture: ComponentFixture<RebuttalDetailComponent>;
        const route = ({ data: of({ rebuttal: new Rebuttal(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [RebuttalDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(RebuttalDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(RebuttalDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.rebuttal).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
