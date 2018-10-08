/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { NoteComponent } from 'app/entities/note/note.component';
import { NoteService } from 'app/entities/note/note.service';
import { Note } from 'app/shared/model/note.model';

describe('Component Tests', () => {
    describe('Note Management Component', () => {
        let comp: NoteComponent;
        let fixture: ComponentFixture<NoteComponent>;
        let service: NoteService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [NoteComponent],
                providers: []
            })
                .overrideTemplate(NoteComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(NoteComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(NoteService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Note(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.notes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
