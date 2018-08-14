/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { GreatBigExampleApplicationTestModule } from '../../../test.module';
import { AuthorDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/author/author-delete-dialog.component';
import { AuthorService } from '../../../../../../main/webapp/app/entities/author/author.service';

describe('Component Tests', () => {

    describe('Author Management Delete Component', () => {
        let comp: AuthorDeleteDialogComponent;
        let fixture: ComponentFixture<AuthorDeleteDialogComponent>;
        let service: AuthorService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [AuthorDeleteDialogComponent],
                providers: [
                    AuthorService
                ]
            })
            .overrideTemplate(AuthorDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AuthorDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AuthorService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
