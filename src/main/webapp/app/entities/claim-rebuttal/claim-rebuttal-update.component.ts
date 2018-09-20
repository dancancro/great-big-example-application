import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Component({
    selector: 'jhi-claim-rebuttal-update',
    templateUrl: './claim-rebuttal-update.component.html'
})
export class ClaimRebuttalUpdateComponent implements OnInit {
    private _claimRebuttal: IClaimRebuttal;
    isSaving: boolean;

    constructor(private claimRebuttalService: ClaimRebuttalService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ claimRebuttal }) => {
            this.claimRebuttal = claimRebuttal;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.claimRebuttal.id !== undefined) {
            this.subscribeToSaveResponse(this.claimRebuttalService.update(this.claimRebuttal));
        } else {
            this.subscribeToSaveResponse(this.claimRebuttalService.create(this.claimRebuttal));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IClaimRebuttal>>) {
        result.subscribe((res: HttpResponse<IClaimRebuttal>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get claimRebuttal() {
        return this._claimRebuttal;
    }

    set claimRebuttal(claimRebuttal: IClaimRebuttal) {
        this._claimRebuttal = claimRebuttal;
    }
}
