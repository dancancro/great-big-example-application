/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { RebuttalDetailComponent } from '../../../../../../main/webapp/app/entities/rebuttal/rebuttal-detail.component';
import { RebuttalService } from '../../../../../../main/webapp/app/entities/rebuttal/rebuttal.service';
import { Rebuttal } from '../../../../../../main/webapp/app/entities/rebuttal/rebuttal.model';

describe('Component Tests', () => {

    describe('Rebuttal Management Detail Component', () => {
        let comp: RebuttalDetailComponent;
        let fixture: ComponentFixture<RebuttalDetailComponent>;
        let service: RebuttalService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [RebuttalDetailComponent],
                providers: [
                    RebuttalService
                ]
            })
            .overrideTemplate(RebuttalDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RebuttalDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RebuttalService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Rebuttal(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.rebuttal).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
