/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { CrisisDetailComponent } from '../../../../../../main/webapp/app/entities/crisis/crisis-detail.component';
import { CrisisService } from '../../../../../../main/webapp/app/entities/crisis/crisis.service';
import { Crisis } from '../../../../../../main/webapp/app/entities/crisis/crisis.model';

describe('Component Tests', () => {

    describe('Crisis Management Detail Component', () => {
        let comp: CrisisDetailComponent;
        let fixture: ComponentFixture<CrisisDetailComponent>;
        let service: CrisisService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [CrisisDetailComponent],
                providers: [
                    CrisisService
                ]
            })
            .overrideTemplate(CrisisDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CrisisDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CrisisService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Crisis(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.crisis).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
