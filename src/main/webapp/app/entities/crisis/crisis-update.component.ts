import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICrisis } from 'app/shared/model/crisis.model';
import { CrisisService } from './crisis.service';

@Component({
    selector: 'jhi-crisis-update',
    templateUrl: './crisis-update.component.html'
})
export class CrisisUpdateComponent implements OnInit {
    private _crisis: ICrisis;
    isSaving: boolean;

    constructor(private crisisService: CrisisService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ crisis }) => {
            this.crisis = crisis;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.crisis.id !== undefined) {
            this.subscribeToSaveResponse(this.crisisService.update(this.crisis));
        } else {
            this.subscribeToSaveResponse(this.crisisService.create(this.crisis));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICrisis>>) {
        result.subscribe((res: HttpResponse<ICrisis>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get crisis() {
        return this._crisis;
    }

    set crisis(crisis: ICrisis) {
        this._crisis = crisis;
    }
}
