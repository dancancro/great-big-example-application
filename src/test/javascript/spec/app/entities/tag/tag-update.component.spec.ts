/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { TagUpdateComponent } from 'app/entities/tag/tag-update.component';
import { TagService } from 'app/entities/tag/tag.service';
import { Tag } from 'app/shared/model/tag.model';

describe('Component Tests', () => {
    describe('Tag Management Update Component', () => {
        let comp: TagUpdateComponent;
        let fixture: ComponentFixture<TagUpdateComponent>;
        let service: TagService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [TagUpdateComponent]
            })
                .overrideTemplate(TagUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TagUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TagService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Tag(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.tag = entity;
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
                    const entity = new Tag();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.tag = entity;
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
