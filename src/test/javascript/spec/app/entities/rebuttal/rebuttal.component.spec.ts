/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { RebuttalComponent } from 'app/entities/rebuttal/rebuttal.component';
import { RebuttalService } from 'app/entities/rebuttal/rebuttal.service';
import { Rebuttal } from 'app/shared/model/rebuttal.model';

describe('Component Tests', () => {
    describe('Rebuttal Management Component', () => {
        let comp: RebuttalComponent;
        let fixture: ComponentFixture<RebuttalComponent>;
        let service: RebuttalService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [RebuttalComponent],
                providers: []
            })
                .overrideTemplate(RebuttalComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(RebuttalComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RebuttalService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Rebuttal(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.rebuttals[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
