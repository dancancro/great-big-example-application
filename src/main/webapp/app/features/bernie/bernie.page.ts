import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';

import * as fromRoot from '../../core/store';
import { BerniePageLayout } from './bernie.layout';
import { Claim, ClaimFields, initialClaim } from '../../core/store/claim/claim.model';
import { Rebuttal, RebuttalFields, initialRebuttal } from '../../core/store/rebuttal/rebuttal.model';
import { ClaimRebuttal, initialClaimRebuttal } from '../../core/store/claim-rebuttal/claim-rebuttal.model';
import { Entities } from '../../core/store/entity/entity.model';
import * as EntityActions from '../../core/store/entity/entity.actions';
import * as SliceActions from '../../core/store/slice/slice.actions';
import { slices, handleNavigation } from '../../core/store/util';

@Component({
    selector: 'jhi-bernie',
    templateUrl: './bernie.page.html',
    styleUrls: ['./bernie.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BerniePage implements OnInit, OnDestroy, AfterViewChecked {
    page$: Observable<BerniePageLayout>;
    pageSub: Subscription;
    claimEntities$: Observable<Entities<Claim>>;
    claimEntities: Entities<Claim>;
    claimEntitiesSub: Subscription;
    deepClaims$: Store<Claim[]>;
    deepClaims: Claim[];
    rebuttals$: Observable<Rebuttal[]>;
    loading$: Observable<boolean>;
    expanded: boolean;
    editable: boolean;
    claimRebuttals$: Store<ClaimRebuttal[]>;
    claimRebuttalsSub: Subscription;
    claimRebuttals: Readonly<ClaimRebuttal[]>;
    searchTerms$ = new Subject<string>();
    searchTerms: string;
    setSearch$: Subscription;
    getBernieSearchTermSub: Subscription;
    options: SortablejsOptions = {
        disabled: true
    };
    selectedClaimId$: Observable<string>;
    selectedClaimIdSub: Subscription;

    constructor(private store: Store<fromRoot.RootState>,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.page$ = this.store.select(fromRoot.getBerniePageState);
        this.claimEntities$ = this.store.select(fromRoot.getClaimsState);
        this.deepClaims$ = this.store.select(fromRoot.getDeepClaims);
        this.claimRebuttals$ = this.store.select(fromRoot.getClaimRebuttals);
        this.loading$ = this.store.select(fromRoot.getSearchLoading);
        this.pageSub = this.page$.subscribe((page) => {
            this.expanded = page.expanded;
            this.editable = page.editable;
        });
        this.claimRebuttalsSub = this.claimRebuttals$.subscribe((claimRebuttals) => this.claimRebuttals = claimRebuttals);
        this.claimEntitiesSub = this.claimEntities$.subscribe((claimEntities) => this.claimEntities = claimEntities);
        this.getBernieSearchTermSub = this.store.select(fromRoot.getBernieSearchTerm).subscribe((term) => {
            this.searchTerms = term;
        });
        // this.selectedClaimId$ = this.store.select(fromRoot.getSelectedClaimId);

        this.selectedClaimIdSub =
            this.store.select(fromRoot.getSelectedClaimId)
                .withLatestFrom(this.deepClaims$)
                .subscribe(([claimId, deepClaims]) => {
                    this.store.dispatch(new EntityActions.Patch(slices.CLAIM, { id: claimId, expanded: true }));
                })
        this.searchTerms$
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .subscribe((term) => {
                const url = '/features/bernie' + (term ? `?q=${term}` : '');
                this.router.navigateByUrl(url);
            });
        this.store.dispatch(new EntityActions.Load(slices.CLAIM));
        this.store.dispatch(new EntityActions.Load(slices.CLAIM_REBUTTAL));
        this.store.dispatch(new EntityActions.Load(slices.REBUTTAL));
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms$.next(term);
    }

    toggleEditable() {
        this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['berniePage', 'editable'], !this.editable));
        this.options = { disabled: !this.options.disabled };
    }

    toggleExpanded() {
        const expanded = this.expanded;
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

    toggleRebuttals(claim: Claim) {
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
        const rebuttalIds = Array.prototype.slice.call(event.srcElement.children).filter((li) => li.id).map((li) => +li.id);

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

        setTimeout(() => {   // need this or else sortablejs event handling gets screwed up
            // get the claim ids in the updated order from the DOM LIs   IS THERE A BETTER WAY TO GET THESE?
            const ids = Array.prototype.slice.call(event.srcElement.children).map((li) => li.children[0].children[0].children[0].id);

            // get an updated hash of entities by updating sortOrder of the old ones
            const entities = Object.assign({}, this.claimEntities.entities);
            ids.map((id, index) => {
                entities[id].sortOrder = index;
            })

            // combine entities and ids and other properties of claimEntities like selectedEntity into a new object and dispatch an update
            const newEntities = Object.assign({}, this.claimEntities, { entities, ids });  // this Object.assign isn't necessary. Merge in slice.functions too
            this.store.dispatch(new SliceActions.Update(slices.CLAIM, [], newEntities));
        })
    }

    ngOnDestroy() {
        this.pageSub && this.pageSub.unsubscribe();
        this.claimRebuttalsSub && this.claimRebuttalsSub.unsubscribe();
    }

    ngAfterViewChecked() {
        // this.scrollDistance = WrappedValue.wrap(0)
        // console.log("setting scrolly")
        // this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['berniePage', 'scrollY'], 300));
    }
}
