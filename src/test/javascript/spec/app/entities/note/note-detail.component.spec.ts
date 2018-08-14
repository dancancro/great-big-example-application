/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { NoteDetailComponent } from '../../../../../../main/webapp/app/entities/note/note-detail.component';
import { NoteService } from '../../../../../../main/webapp/app/entities/note/note.service';
import { Note } from '../../../../../../main/webapp/app/entities/note/note.model';

describe('Component Tests', () => {

    describe('Note Management Detail Component', () => {
        let comp: NoteDetailComponent;
        let fixture: ComponentFixture<NoteDetailComponent>;
        let service: NoteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [NoteDetailComponent],
                providers: [
                    NoteService
                ]
            })
            .overrideTemplate(NoteDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(NoteDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(NoteService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Note(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.note).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
