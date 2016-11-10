import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../core/store';
import * as claimActions from '../core/store/claim/claim.actions';
import * as claimRebuttalActions from '../core/store/claim-rebuttal/claim-rebuttal.actions';
import * as rebuttalActions from '../core/store/rebuttal/rebuttal.actions';
import * as claims from '../core/store/claim/claim.actions';
import { DebatePageLayout } from '../core/store/layout/layout.model';
import { Claim, initialClaim } from '../core/store/claim/claim.model';
import { Rebuttal, initialRebuttal } from '../core/store/rebuttal/rebuttal.model';
import { ClaimRebuttal } from '../core/store/claim-rebuttal/claim-rebuttal.model';
import * as claim from '../core/store/claim/claim.actions';
import * as layout from '../core/store/layout/layout.actions';

let uuid = require('node-uuid');

@Component({
  selector: 'app-debate',
  templateUrl: 'debate.page.html',
  styleUrls: ['debate.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebatePage {
  page$: Observable<DebatePageLayout>;
  claims$: Observable<Claim[]>;
  rebuttals$: Observable<Rebuttal[]>;
  loading$: Observable<boolean>;
  expanded: boolean;
  editable: boolean;
  pageSubscription: Subscription;

  private subscription: any;
  options: SortablejsOptions = {
    disabled: false
  };

  constructor(private store: Store<fromRoot.RootState>) {
    this.page$ = store.let(fromRoot.getDebatePageState);
    this.claims$ = store.let(fromRoot.getDeepClaims);
    this.loading$ = store.let(fromRoot.getSearchLoading);
    this.pageSubscription = this.page$.subscribe((page) => {
      this.expanded = page.expanded
      this.editable = page.editable
    })
  }

  toggleEditable() {
    this.store.dispatch(new claim.ToggleEditableAction(!this.editable));
  }

  toggleExpanded() {
    this.store.dispatch(new claim.ToggleAllRebuttalsAction(!this.expanded));
  }

  addClaim() {
    this.store.dispatch(new claims.AddClaimAction(Object.assign({}, initialClaim, {
      id: uuid.v1(),
      rebuttalIds: [],
      name: 'New claim',
      expanded: false,
      rebuttalsReordered: false
    })))
  }

  saveAll() {
    alert("Add save here");
  }

  addRebuttal(claim: Claim) {
    // either create a new Rebuttal or pick an existing one
    this.store.dispatch(new claimRebuttalActions.AssociateRebuttalAction({ claim: claim, rebuttal: initialRebuttal }))
  }

  toggleRebuttals(claim: Claim) {
    this.store.dispatch(new claimActions.ToggleRebuttalsAction(claim));
  }

  cancelRebuttal({claim, rebuttal}) {
    if (rebuttal.isNew) {
      // TODO: delete the rebuttal record if necessary
      console.log('rebuttal: ' + JSON.stringify(rebuttal))
      this.store.dispatch(new claimRebuttalActions.DisassociateRebuttalAction({ claim, rebuttal }));
    } else {
      this.store.dispatch(new rebuttalActions.CancelRebuttalAction(rebuttal));
    }
  }

  saveRebuttal({id, newRebuttal}) {
    this.store.dispatch(new rebuttalActions.SaveRebuttalAction({ id, newRebuttal }));
  }

  makeRebuttalEditable(rebuttal: Rebuttal) {
    this.store.dispatch(new rebuttalActions.MakeRebuttalEditableAction(rebuttal));
  }

  reorderRebuttals(claim, event) {
    let rebuttalIds = Array.prototype.slice.call(event.srcElement.children).filter(li => li.id).map(li => li.id);
    this.store.dispatch(new claimRebuttalActions.ReorderRebuttalsAction({claim, rebuttalIds}));
  }

  reorderClaims(event) {
    // TODO: There's gotta be a better way
    // This is called when the claims are reordered AND when the rebuttals for a claim are reordered.
    // We need to ignore the second of these

    try {
      let claimIds = Array.prototype.slice.call(event.srcElement.children).map(li => li.children[0].children[0].children[0].id);
      this.store.dispatch(new claimActions.ReorderClaimsAction(claimIds));
      } catch(err) {

      }
    }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
  }
}
