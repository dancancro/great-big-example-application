import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { ITalk } from 'app/shared/model/talk.model';
import { TalkService } from './talk.service';

@Component({
    selector: 'jhi-talk-update',
    templateUrl: './talk-update.component.html'
})
export class TalkUpdateComponent implements OnInit {
    private _talk: ITalk;
    isSaving: boolean;

    constructor(private dataUtils: JhiDataUtils, private talkService: TalkService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ talk }) => {
            this.talk = talk;
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.talk.id !== undefined) {
            this.subscribeToSaveResponse(this.talkService.update(this.talk));
        } else {
            this.subscribeToSaveResponse(this.talkService.create(this.talk));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITalk>>) {
        result.subscribe((res: HttpResponse<ITalk>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get talk() {
        return this._talk;
    }

    set talk(talk: ITalk) {
        this._talk = talk;
    }
}
