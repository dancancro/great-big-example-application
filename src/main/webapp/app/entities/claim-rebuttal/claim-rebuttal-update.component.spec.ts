/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { ClaimRebuttalUpdateComponent } from 'app/entities/claim-rebuttal/claim-rebuttal-update.component';
import { ClaimRebuttalService } from 'app/entities/claim-rebuttal/claim-rebuttal.service';
import { ClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';

describe('Component Tests', () => {
    describe('ClaimRebuttal Management Update Component', () => {
        let comp: ClaimRebuttalUpdateComponent;
        let fixture: ComponentFixture<ClaimRebuttalUpdateComponent>;
        let service: ClaimRebuttalService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimRebuttalUpdateComponent]
            })
                .overrideTemplate(ClaimRebuttalUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ClaimRebuttalUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimRebuttalService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new ClaimRebuttal(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.claimRebuttal = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new ClaimRebuttal();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.claimRebuttal = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
