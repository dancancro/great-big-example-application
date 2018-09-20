import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IClaim } from 'app/shared/model/claim.model';
import { ClaimService } from './claim.service';

@Component({
    selector: 'jhi-claim-update',
    templateUrl: './claim-update.component.html'
})
export class ClaimUpdateComponent implements OnInit {
    private _claim: IClaim;
    isSaving: boolean;

    constructor(private claimService: ClaimService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ claim }) => {
            this.claim = claim;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.claim.id !== undefined) {
            this.subscribeToSaveResponse(this.claimService.update(this.claim));
        } else {
            this.subscribeToSaveResponse(this.claimService.create(this.claim));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IClaim>>) {
        result.subscribe((res: HttpResponse<IClaim>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get claim() {
        return this._claim;
    }

    set claim(claim: IClaim) {
        this._claim = claim;
    }
}
