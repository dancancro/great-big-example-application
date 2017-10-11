import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Note } from './note.model';
import { NotePopupService } from './note-popup.service';
import { NoteService } from './note.service';

@Component({
    selector: 'jhi-note-dialog',
    templateUrl: './note-dialog.component.html'
})
export class NoteDialogComponent implements OnInit {

    note: Note;
    authorities: any[];
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private noteService: NoteService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.note.id !== undefined) {
            this.subscribeToSaveResponse(
                this.noteService.update(this.note));
        } else {
            this.subscribeToSaveResponse(
                this.noteService.create(this.note));
        }
    }

    private subscribeToSaveResponse(result: Observable<Note>) {
        result.subscribe((res: Note) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Note) {
        this.eventManager.broadcast({ name: 'noteListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-note-popup',
    template: ''
})
export class NotePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private notePopupService: NotePopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.modalRef = this.notePopupService
                    .open(<Component>NoteDialogComponent, params['id']);
            } else {
                this.modalRef = this.notePopupService
                    .open(<Component>NoteDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
