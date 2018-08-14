/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ClaimUpdateComponent } from 'app/entities/claim/claim-update.component';
import { ClaimService } from 'app/entities/claim/claim.service';
import { Claim } from 'app/shared/model/claim.model';

describe('Component Tests', () => {
    describe('Claim Management Update Component', () => {
        let comp: ClaimUpdateComponent;
        let fixture: ComponentFixture<ClaimUpdateComponent>;
        let service: ClaimService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimUpdateComponent]
            })
                .overrideTemplate(ClaimUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ClaimUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Claim(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.claim = entity;
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
                    const entity = new Claim();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.claim = entity;
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
