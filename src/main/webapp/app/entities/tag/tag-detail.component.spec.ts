/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { TagDetailComponent } from 'app/entities/tag/tag-detail.component';
import { Tag } from 'app/shared/model/tag.model';

describe('Component Tests', () => {
    describe('Tag Management Detail Component', () => {
        let comp: TagDetailComponent;
        let fixture: ComponentFixture<TagDetailComponent>;
        const route = ({ data: of({ tag: new Tag(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [TagDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TagDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TagDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.tag).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
