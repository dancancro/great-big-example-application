/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { CrisisComponent } from '../../../../../../main/webapp/app/entities/crisis/crisis.component';
import { CrisisService } from '../../../../../../main/webapp/app/entities/crisis/crisis.service';
import { Crisis } from '../../../../../../main/webapp/app/entities/crisis/crisis.model';

describe('Component Tests', () => {

    describe('Crisis Management Component', () => {
        let comp: CrisisComponent;
        let fixture: ComponentFixture<CrisisComponent>;
        let service: CrisisService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [CrisisComponent],
                providers: [
                    CrisisService
                ]
            })
            .overrideTemplate(CrisisComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CrisisComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CrisisService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Crisis(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.crises[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
