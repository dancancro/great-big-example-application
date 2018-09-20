import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IRebuttal } from 'app/shared/model/rebuttal.model';
import { RebuttalService } from './rebuttal.service';

@Component({
    selector: 'jhi-rebuttal-update',
    templateUrl: './rebuttal-update.component.html'
})
export class RebuttalUpdateComponent implements OnInit {
    private _rebuttal: IRebuttal;
    isSaving: boolean;
    date: string;
    expires: string;

    constructor(private rebuttalService: RebuttalService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ rebuttal }) => {
            this.rebuttal = rebuttal;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.rebuttal.date = moment(this.date, DATE_TIME_FORMAT);
        this.rebuttal.expires = moment(this.expires, DATE_TIME_FORMAT);
        if (this.rebuttal.id !== undefined) {
            this.subscribeToSaveResponse(this.rebuttalService.update(this.rebuttal));
        } else {
            this.subscribeToSaveResponse(this.rebuttalService.create(this.rebuttal));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IRebuttal>>) {
        result.subscribe((res: HttpResponse<IRebuttal>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get rebuttal() {
        return this._rebuttal;
    }

    set rebuttal(rebuttal: IRebuttal) {
        this._rebuttal = rebuttal;
        this.date = moment(rebuttal.date).format(DATE_TIME_FORMAT);
        this.expires = moment(rebuttal.expires).format(DATE_TIME_FORMAT);
    }
}
