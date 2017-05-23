import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/combineLatest';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Router, ActivatedRoute } from '@angular/router';

import * as fromRoot from '../../core/store';
import { BerniePageLayout } from '../../core/store/layout/layout.model';
import { Claim, initialClaim } from '../../core/store/claim/claim.model';
import { Rebuttal, initialRebuttal } from '../../core/store/rebuttal/rebuttal.model';
import { ClaimRebuttal, initialClaimRebuttal } from '../../core/store/claim-rebuttal/claim-rebuttal.model';
import { Entities } from '../../core/store/entity/entity.model';
import * as EntityActions from '../../core/store/entity/entity.actions';
import * as SliceActions from '../../core/store/slice/slice.actions';
import { slices } from '../../core/store/util';

const uuid = require('uuid');

@Component({
    selector: 'jhi-bernie',
    templateUrl: './bernie.page.html',
    styleUrls: ['./bernie.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BerniePage implements OnDestroy {
    page$: Observable<BerniePageLayout>;
    pageSub: Subscription;
    claims$: Observable<Claim[]>;
    rebuttals$: Observable<Rebuttal[]>;
    loading$: Observable<boolean>;
    expanded: boolean;
    editable: boolean;
    claimRebuttals$: Observable<ClaimRebuttal[]>;
    claimRebuttalsSub: Subscription;
    claimRebuttals: ClaimRebuttal[];

    options: SortablejsOptions = {
        disabled: false
    };

    constructor(private store: Store<fromRoot.RootState>,
        private route: ActivatedRoute, ) {
        this.page$ = store.select(fromRoot.getBerniePageState);
        this.claims$ = store.select(fromRoot.getDeepClaims);
        this.claimRebuttals$ = store.select(fromRoot.getClaimRebuttals);
        this.loading$ = store.select(fromRoot.getSearchLoading);
        this.pageSub = this.page$.subscribe((page) => {
            this.expanded = page.expanded;
            this.editable = page.editable;
        });
        this.claimRebuttalsSub = this.claimRebuttals$.subscribe((claimRebuttals) => this.claimRebuttals = claimRebuttals);

        // this.claims$.do(claims => console.log(claims.length), error => console.log('error'), () => console.log('complete'));
        // this.claims$.takeLast(1).do(claims => console.log(claims.length), error => console.log('error'), () => console.log('complete'));

        // this.claims$.subscribe(claim => {
        //   console.log('claims')
        // });

        // this.claimsSubscription = combineLatest(
        //   this.claims$,
        //   this.route.params)
        //   .subscribe(([claims, params]) => {
        //     let id = +params['claimId'];
        //     if (id && claims && claims.length > 0 && claims.find(claim => claim.id === id)) {
        //       console.log('found');
        //     }
        //   });
    }

    toggleEditable() {
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['berniePage', 'editable'], !this.editable));
    }

    toggleExpanded() {
        const expanded = this.expanded;
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['berniePage', 'expanded'], !expanded));
        this.store.dispatch(new EntityActions.UpdateEach(slices.CLAIM, { expanded: !expanded }));
    }

    addClaim() {
        const newClaim = prompt('New claim');
        if (newClaim) {
            this.store.dispatch(new EntityActions.AddTemp(slices.CLAIM, {
                id: uuid.v1(),
                name: newClaim
            }));
        }
    }

    saveAll() {
        alert('Add save here');
    }

    addRebuttal(claim: Claim) {
        // claims & rebuttals have a many-to-many relationship
        // to create a new, blank rebuttal for this claim
        // create an instance of rebuttal and an instance of the join record claimRebuttal
        // and dispatch actions to each respective reducer
        const newRebuttal = initialRebuttal({ editing: true });
        const newClaimRebuttal = initialClaimRebuttal({ claimId: claim.id, rebuttalId: EntityActions.TEMP });
        this.store.dispatch(new EntityActions.AddTemp(slices.REBUTTAL, newRebuttal));
        this.store.dispatch(new EntityActions.AddTemp(slices.CLAIM_REBUTTAL, newClaimRebuttal));
    }
    toggleRebuttals(claim: Claim) {
        this.store.dispatch(new EntityActions.Update(slices.CLAIM, { id: claim.id, expanded: !claim.expanded }));
    }

    cancelRebuttal({ claimRebuttalId, rebuttal }) {
        if (rebuttal.id === EntityActions.TEMP) {
            this.store.dispatch(new EntityActions.DeleteTemp(slices.CLAIM_REBUTTAL));
            this.store.dispatch(new EntityActions.DeleteTemp(slices.REBUTTAL));
        } else {
            this.store.dispatch(new EntityActions.Update<Rebuttal>(slices.REBUTTAL, { id: rebuttal.id, editing: false }));
        }
    }

    saveRebuttal(newRebuttal) {
        this.store.dispatch(new EntityActions.Update<Rebuttal>(slices.REBUTTAL, Object.assign({}, newRebuttal, { editing: false })));
    }

    makeRebuttalEditable(rebuttal: Rebuttal) {
        this.store.dispatch(new EntityActions.Update<Rebuttal>(slices.REBUTTAL, { id: rebuttal.id, editing: true }));
    }

    reorderRebuttals(claim, event) {
        const rebuttalIds = Array.prototype.slice.call(event.srcElement.children).filter((li) => li.id).map((li) => +li.id);

        // Otherwise sortablejs gets a null event and throws an error
        setTimeout(() => {
            let i = 1;
            rebuttalIds.map((rebuttalId) => {
                const crid = this.claimRebuttals.filter((cr) => cr.claimId === claim.id && cr.rebuttalId === rebuttalId)[0].id;
                this.store.dispatch(new SliceActions.Update(slices.CLAIM_REBUTTAL, ['entities', crid, 'sortOrder'], i));
                i++;
            })

        }, 0);
    }

    reorderClaims(event) {
        // Not sure if we want this to work.
        //
        // if (event.stopPropagation) {
        //     event.stopPropagation();
        // }
        // if (event.cancelBubble != null) {
        //     event.cancelBubble = true;
        // }
        // TODO: There's gotta be a better way
        // This is called when the claims are reordered AND when the rebuttals for a claim are reordered.
        // We need to ignore the second of these

        try {
            const claimIds = Array.prototype.slice.call(event.srcElement.children).map((li) => li.children[0].children[0].children[0].id);
            this.store.dispatch(new SliceActions.Update(slices.CLAIM, ['ids'], claimIds));
        } catch (err) {

        }
    }

    ngOnDestroy() {
        this.pageSub && this.pageSub.unsubscribe();
        this.claimRebuttalsSub && this.claimRebuttalsSub.unsubscribe();
    }
}
