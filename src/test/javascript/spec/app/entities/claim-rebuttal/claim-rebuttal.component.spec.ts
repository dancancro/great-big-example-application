/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ClaimRebuttalComponent } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal.component';
import { ClaimRebuttalService } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal.service';
import { ClaimRebuttal } from '../../../../../../main/webapp/app/entities/claim-rebuttal/claim-rebuttal.model';

describe('Component Tests', () => {

    describe('ClaimRebuttal Management Component', () => {
        let comp: ClaimRebuttalComponent;
        let fixture: ComponentFixture<ClaimRebuttalComponent>;
        let service: ClaimRebuttalService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimRebuttalComponent],
                providers: [
                    ClaimRebuttalService
                ]
            })
            .overrideTemplate(ClaimRebuttalComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClaimRebuttalComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimRebuttalService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new ClaimRebuttal(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.claimRebuttals[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
