/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { HeroComponent } from 'app/entities/hero/hero.component';
import { HeroService } from 'app/entities/hero/hero.service';
import { Hero } from 'app/shared/model/hero.model';

describe('Component Tests', () => {
    describe('Hero Management Component', () => {
        let comp: HeroComponent;
        let fixture: ComponentFixture<HeroComponent>;
        let service: HeroService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [HeroComponent],
                providers: []
            })
                .overrideTemplate(HeroComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(HeroComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HeroService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Hero(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.heroes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
