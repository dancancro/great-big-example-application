/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { HeroDetailComponent } from '../../../../../../main/webapp/app/entities/hero/hero-detail.component';
import { HeroService } from '../../../../../../main/webapp/app/entities/hero/hero.service';
import { Hero } from '../../../../../../main/webapp/app/entities/hero/hero.model';

describe('Component Tests', () => {

    describe('Hero Management Detail Component', () => {
        let comp: HeroDetailComponent;
        let fixture: ComponentFixture<HeroDetailComponent>;
        let service: HeroService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [HeroDetailComponent],
                providers: [
                    HeroService
                ]
            })
            .overrideTemplate(HeroDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HeroDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HeroService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Hero(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.hero).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
