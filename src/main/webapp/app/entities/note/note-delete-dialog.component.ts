import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Note } from './note.model';
import { NotePopupService } from './note-popup.service';
import { NoteService } from './note.service';

@Component({
    selector: 'jhi-note-delete-dialog',
    templateUrl: './note-delete-dialog.component.html'
})
export class NoteDeleteDialogComponent {

    note: Note;

    constructor(
        private noteService: NoteService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.noteService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'noteListModification',
                content: 'Deleted an note'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-note-delete-popup',
    template: ''
})
export class NoteDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private notePopupService: NotePopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.notePopupService
                .open(<Component>NoteDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
