/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ClaimRebuttalDetailComponent } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal-detail.component';
import { ClaimRebuttalService } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal.service';
import { ClaimRebuttal } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal.model';

describe('Component Tests', () => {

    describe('ClaimRebuttal Management Detail Component', () => {
        let comp: ClaimRebuttalDetailComponent;
        let fixture: ComponentFixture<ClaimRebuttalDetailComponent>;
        let service: ClaimRebuttalService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimRebuttalDetailComponent],
                providers: [
                    ClaimRebuttalService
                ]
            })
            .overrideTemplate(ClaimRebuttalDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClaimRebuttalDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimRebuttalService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new ClaimRebuttal(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.claimRebuttal).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
