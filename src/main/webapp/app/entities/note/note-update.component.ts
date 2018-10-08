import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INote } from 'app/shared/model/note.model';
import { NoteService } from './note.service';

@Component({
    selector: 'jhi-note-update',
    templateUrl: './note-update.component.html'
})
export class NoteUpdateComponent implements OnInit {
    private _note: INote;
    isSaving: boolean;

    constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ note }) => {
            this.note = note;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.note.id !== undefined) {
            this.subscribeToSaveResponse(this.noteService.update(this.note));
        } else {
            this.subscribeToSaveResponse(this.noteService.create(this.note));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<INote>>) {
        result.subscribe((res: HttpResponse<INote>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get note() {
        return this._note;
    }

    set note(note: INote) {
        this._note = note;
    }
}
