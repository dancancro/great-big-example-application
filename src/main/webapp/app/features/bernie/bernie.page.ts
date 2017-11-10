import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SortablejsOptions } from 'angular-sortablejs';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';

import * as fromRoot from '../../core/store';
import { BerniePageLayout } from './bernie.layout';
import { Claim, ClaimFields, initialClaim } from '../../core/store/claim/claim.model';
import { Rebuttal, RebuttalFields } from '../../core/store/rebuttal/rebuttal.model';
import { ClaimRebuttal } from '../../core/store/claim-rebuttal/claim-rebuttal.model';
import { Entities } from '../../core/store/entity/entity.model';
import * as EntityActions from '../../core/store/entity/entity.actions';
import * as SliceActions from '../../core/store/slice/slice.actions';
import { slices, handleNavigation } from '../../core/store/util';

@Component({
    selector: 'jhi-bernie',
    templateUrl: './bernie.page.html',
    styleUrls: ['./bernie.page.scss'],
    // This is inappropriate here because this component has internal state
    // For every component you have to choose between either using 1) Observables and the async pipe or using 2) internal state
    // If you use internal state, then you should not use ChangeDetectionStrategy.OnPush which is an optimization
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BerniePage implements OnInit, OnDestroy {
    // Subscriptions
    pageSub: Subscription;
    claimsSub: Subscription;
    claimRebuttalsSub: Subscription;
    searchTermsSub: Subscription;

    // Things that need debouncing
    searchTerms$ = new Subject<string>();
    scrollY$ = new Subject<string>();

    // Component State
    options: SortablejsOptions = { disabled: true };
    page: BerniePageLayout;
    shallowClaims: { [index: string]: Claim };
    claims: Claim[];
    claimRebuttals: Readonly<ClaimRebuttal[]>;
    selectedClaimId: string;
    searchTerms: string;

    constructor(private store: Store<fromRoot.RootState>,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.pageSub = this.store.select(fromRoot.getBerniePageState).subscribe((page) => {
            this.page = page;
        });
        this.claimsSub = this.store.select(fromRoot.getDeepClaims).subscribe((claims) => {
            this.selectedClaimId = claims.selectedClaimId;
            this.claims = claims.deepClaims;
            this.shallowClaims = claims.shallowClaims;  // we need this to do claims reordering
            if (this.selectedClaimId !== null && this.shallowClaims[this.selectedClaimId] && !this.shallowClaims[this.selectedClaimId].expanded) {
                // by this point a Select action has already been dispatched and the selectedEntityId set
                this.store.dispatch(new EntityActions.Patch(slices.CLAIM, { id: this.selectedClaimId, expanded: true }));
                this.scrollY$.next(this.selectedClaimId);
            }
        })
        this.claimRebuttalsSub = this.store.select(fromRoot.getClaimRebuttals).subscribe((claimRebuttals) => {
            this.claimRebuttals = claimRebuttals;
        });
        this.searchTermsSub = this.store.select(fromRoot.getBernieSearchTerm).subscribe((terms) => {
            this.searchTerms = terms;
        });

        this.searchTerms$
            .debounceTime(400)        // wait 400ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .subscribe((term) => {
                this.navigate(term)
            });

        // This is so that the scrolling happens after the data is fetched and the dom is loaded
        this.scrollY$
            .debounceTime(20)  // this must be an amount of time greater than what it takes to load the dom
            .distinctUntilChanged()
            .subscribe((claimId) => {
                const claimBox = window.document.getElementById('claim-box');
                const y = window.document.getElementById(claimId).offsetTop;
                claimBox.scrollTo(0, y - 5); // scroll to the selected Claim minus a smidge of space
            })

        this.store.dispatch(new EntityActions.Unload(slices.CLAIM));
        this.store.dispatch(new EntityActions.Unload(slices.CLAIM_REBUTTAL));
        this.store.dispatch(new EntityActions.Unload(slices.REBUTTAL));
        this.store.dispatch(new EntityActions.Load(slices.CLAIM));
        this.store.dispatch(new EntityActions.Load(slices.CLAIM_REBUTTAL));
        this.store.dispatch(new EntityActions.Load(slices.REBUTTAL));

    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms$.next(term);
    }
    navigate(term: string = this.searchTerms, claimId: string = this.selectedClaimId) {
        const url = '/features/bernie'
            + (claimId !== null ? `/${claimId}` : '')
            + (term ? `?q=${term}` : '');
        this.router.navigateByUrl(url);
    }
    toggleEditable() {
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['berniePage', 'editable'], !this.page.editable));
        this.options = { disabled: !this.options.disabled };
    }

    toggleExpanded() {
        const expanded = this.page.expanded;
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['berniePage', 'expanded'], !expanded));
        this.store.dispatch(new EntityActions.PatchEach(slices.CLAIM, { expanded: !expanded }));
    }

    addClaim() {
        const newClaimName = prompt('New claim');
        if (newClaimName) {
            this.store.dispatch(new EntityActions.AddTemp(slices.CLAIM, {
                name: newClaimName
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
        this.store.dispatch(new EntityActions.AddTemp(slices.REBUTTAL, { editing: true }));
        this.store.dispatch(new EntityActions.AddTemp(slices.CLAIM_REBUTTAL, { claimId: claim.id, rebuttalId: EntityActions.TEMP }));
    }

    toggleRebuttals(claim: { id: string, expanded: boolean }) {
        if (this.selectedClaimId === claim.id && claim.expanded) {
            this.store.dispatch(new EntityActions.Select(slices.CLAIM, { id: null }));
        }
        this.store.dispatch(new EntityActions.Patch<ClaimFields>(slices.CLAIM, { id: claim.id, expanded: !claim.expanded }));
    }

    cancelRebuttal({ claimRebuttalId, rebuttal }) {
        if (rebuttal.id === EntityActions.TEMP) {
            this.store.dispatch(new EntityActions.DeleteTemp(slices.CLAIM_REBUTTAL));
            this.store.dispatch(new EntityActions.DeleteTemp(slices.REBUTTAL));
        } else {
            this.store.dispatch(new EntityActions.Patch<RebuttalFields>(slices.REBUTTAL, { id: rebuttal.id, editing: false }));
        }
    }

    saveRebuttal(newRebuttal) {
        this.store.dispatch(new EntityActions.Update<Rebuttal>(slices.REBUTTAL, Object.assign({}, newRebuttal, { editing: false })));
    }

    makeRebuttalEditable(rebuttal: Rebuttal) {
        this.store.dispatch(new EntityActions.Patch<RebuttalFields>(slices.REBUTTAL, { id: rebuttal.id, editing: true }));
    }

    reorderRebuttals(claim, event) {
        const rebuttalIds = Array.prototype.slice.call(event.srcElement.children).filter((li) => li.id).map((li) => li.id);

        // Otherwise sortablejs gets a null event and throws an error
        setTimeout(() => {
            let i = 1;
            rebuttalIds.map((rebuttalId) => {
                const crid = this.claimRebuttals.filter((cr) => cr.claimId === claim.id && cr.rebuttalId === rebuttalId)[0].id;
                this.store.dispatch(new EntityActions.Patch(slices.CLAIM_REBUTTAL, { id: crid, sortOrder: i }));
                i++;
            })

        }, 0);
    }

    reorderClaims(event) {
        if (event.srcElement.children[0].children[0].localName === 'jhi-bernie-rebuttal') {  //  TODO: find a better way
            return;
        }

        setTimeout(() => {   // need this setTimeout or else sortablejs event handling gets screwed up
            // get the claim ids in the updated order from the DOM LIs   IS THERE A BETTER WAY TO GET THESE?
            const ids = Array.prototype.slice.call(event.srcElement.children).map((li) => li.children[0].children[0].children[0].id);

            // get an updated hash of entities by updating sortOrder of the old ones
            const entities = Object.assign({}, this.shallowClaims);
            ids.map((id, index) => {
                entities[id].sortOrder = index;
            })

            this.store.dispatch(new SliceActions.Patch(slices.CLAIM, [], { entities }));
        })
    }

    ngOnDestroy() {
        this.pageSub && this.pageSub.unsubscribe();
        this.claimsSub && this.claimsSub.unsubscribe();
        this.claimRebuttalsSub && this.claimRebuttalsSub.unsubscribe();
        this.searchTermsSub && this.searchTermsSub.unsubscribe();
    }

}
