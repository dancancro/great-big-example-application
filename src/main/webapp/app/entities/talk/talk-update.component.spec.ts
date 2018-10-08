/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { TalkUpdateComponent } from 'app/entities/talk/talk-update.component';
import { TalkService } from 'app/entities/talk/talk.service';
import { Talk } from 'app/shared/model/talk.model';

describe('Component Tests', () => {
    describe('Talk Management Update Component', () => {
        let comp: TalkUpdateComponent;
        let fixture: ComponentFixture<TalkUpdateComponent>;
        let service: TalkService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [TalkUpdateComponent]
            })
                .overrideTemplate(TalkUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TalkUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TalkService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Talk(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.talk = entity;
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
                    const entity = new Talk();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.talk = entity;
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
