import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
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
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    HeroService,
                    EventManager
                ]
            }).overrideTemplate(HeroDetailComponent, '')
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

            spyOn(service, 'find').and.returnValue(Observable.of(new Hero(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.hero).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
