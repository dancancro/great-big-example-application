/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { CrisisComponent } from 'app/entities/crisis/crisis.component';
import { CrisisService } from 'app/entities/crisis/crisis.service';
import { Crisis } from 'app/shared/model/crisis.model';

describe('Component Tests', () => {
    describe('Crisis Management Component', () => {
        let comp: CrisisComponent;
        let fixture: ComponentFixture<CrisisComponent>;
        let service: CrisisService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [CrisisComponent],
                providers: []
            })
                .overrideTemplate(CrisisComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CrisisComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CrisisService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Crisis(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.crises[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
