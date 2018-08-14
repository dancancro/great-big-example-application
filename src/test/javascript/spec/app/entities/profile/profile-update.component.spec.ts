/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { ProfileUpdateComponent } from 'app/entities/profile/profile-update.component';
import { ProfileService } from 'app/entities/profile/profile.service';
import { Profile } from 'app/shared/model/profile.model';

describe('Component Tests', () => {
    describe('Profile Management Update Component', () => {
        let comp: ProfileUpdateComponent;
        let fixture: ComponentFixture<ProfileUpdateComponent>;
        let service: ProfileService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ProfileUpdateComponent]
            })
                .overrideTemplate(ProfileUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ProfileUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProfileService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Profile(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.profile = entity;
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
                    const entity = new Profile();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.profile = entity;
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
