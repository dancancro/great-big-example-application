/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GreatBigExampleApplicationTestModule } from '../../../mocks/test.module';
import { ClaimRebuttalDeleteDialogComponent } from 'app/entities/claim-rebuttal/claim-rebuttal-delete-dialog.component';
import { ClaimRebuttalService } from 'app/entities/claim-rebuttal/claim-rebuttal.service';

describe('Component Tests', () => {
    describe('ClaimRebuttal Management Delete Component', () => {
        let comp: ClaimRebuttalDeleteDialogComponent;
        let fixture: ComponentFixture<ClaimRebuttalDeleteDialogComponent>;
        let service: ClaimRebuttalService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GreatBigExampleApplicationTestModule],
                declarations: [ClaimRebuttalDeleteDialogComponent]
            })
                .overrideTemplate(ClaimRebuttalDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ClaimRebuttalDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClaimRebuttalService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

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
