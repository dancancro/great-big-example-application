/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { TagComponent } from '../../../../../../main/webapp/app/entities/tag/tag.component';
import { TagService } from '../../../../../../main/webapp/app/entities/tag/tag.service';
import { Tag } from '../../../../../../main/webapp/app/entities/tag/tag.model';

describe('Component Tests', () => {

    describe('Tag Management Component', () => {
        let comp: TagComponent;
        let fixture: ComponentFixture<TagComponent>;
        let service: TagService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [TagComponent],
                providers: [
                    TagService
                ]
            })
            .overrideTemplate(TagComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TagComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TagService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Tag(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.tags[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
