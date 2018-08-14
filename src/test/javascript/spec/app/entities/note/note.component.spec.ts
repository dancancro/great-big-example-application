/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { NoteComponent } from '../../../../../../main/webapp/app/entities/note/note.component';
import { NoteService } from '../../../../../../main/webapp/app/entities/note/note.service';
import { Note } from '../../../../../../main/webapp/app/entities/note/note.model';

describe('Component Tests', () => {

    describe('Note Management Component', () => {
        let comp: NoteComponent;
        let fixture: ComponentFixture<NoteComponent>;
        let service: NoteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [NoteComponent],
                providers: [
                    NoteService
                ]
            })
            .overrideTemplate(NoteComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(NoteComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(NoteService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Note(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.notes[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
