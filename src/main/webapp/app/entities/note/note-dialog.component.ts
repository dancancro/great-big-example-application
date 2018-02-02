import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Note } from './note.model';
import { NotePopupService } from './note-popup.service';
import { NoteService } from './note.service';

@Component({
    selector: 'jhi-note-dialog',
    templateUrl: './note-dialog.component.html'
})
export class NoteDialogComponent implements OnInit {

    note: Note;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private noteService: NoteService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
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

    private subscribeToSaveResponse(result: Observable<HttpResponse<Note>>) {
        result.subscribe((res: HttpResponse<Note>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Note) {
        this.eventManager.broadcast({ name: 'noteListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-note-popup',
    template: ''
})
export class NotePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private notePopupService: NotePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.notePopupService
                    .open(NoteDialogComponent as Component, params['id']);
            } else {
                this.notePopupService
                    .open(NoteDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
