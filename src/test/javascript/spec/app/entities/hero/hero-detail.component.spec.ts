/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { HeroDetailComponent } from 'app/entities/hero/hero-detail.component';
import { Hero } from 'app/shared/model/hero.model';

describe('Component Tests', () => {
    describe('Hero Management Detail Component', () => {
        let comp: HeroDetailComponent;
        let fixture: ComponentFixture<HeroDetailComponent>;
        const route = ({ data: of({ hero: new Hero(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [HeroDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(HeroDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(HeroDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.hero).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
