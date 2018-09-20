import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { INote } from 'app/shared/model/note.model';

@Component({
    selector: 'jhi-note-detail',
    templateUrl: './note-detail.component.html'
})
export class NoteDetailComponent implements OnInit {
    note: INote;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ note }) => {
            this.note = note;
        });
    }

    previousState() {
        window.history.back();
    }
}
