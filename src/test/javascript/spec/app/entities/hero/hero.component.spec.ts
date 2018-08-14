/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { HeroComponent } from '../../../../../../main/webapp/app/entities/hero/hero.component';
import { HeroService } from '../../../../../../main/webapp/app/entities/hero/hero.service';
import { Hero } from '../../../../../../main/webapp/app/entities/hero/hero.model';

describe('Component Tests', () => {

    describe('Hero Management Component', () => {
        let comp: HeroComponent;
        let fixture: ComponentFixture<HeroComponent>;
        let service: HeroService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [HeroComponent],
                providers: [
                    HeroService
                ]
            })
            .overrideTemplate(HeroComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HeroComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HeroService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Hero(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.heroes[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
