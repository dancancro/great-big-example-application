/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { CrisisDetailComponent } from 'app/entities/crisis/crisis-detail.component';
import { Crisis } from 'app/shared/model/crisis.model';

describe('Component Tests', () => {
    describe('Crisis Management Detail Component', () => {
        let comp: CrisisDetailComponent;
        let fixture: ComponentFixture<CrisisDetailComponent>;
        const route = ({ data: of({ crisis: new Crisis(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [CrisisDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(CrisisDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CrisisDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.crisis).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
