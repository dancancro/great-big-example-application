import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';

import * as fromRoot from '../core/store';
import * as claimActions from '../core/store/claim/claim.actions';
import * as rebuttalActions from '../core/store/rebuttal/rebuttal.actions';
import * as claims from '../core/store/claim/claim.actions';
import { DebatePageLayout } from '../core/store/layout/layout.model';
import { Claim } from '../core/store/claim/claim.model';
import { Rebuttal } from '../core/store/rebuttal/rebuttal.model';
import { ClaimRebuttal } from '../core/store/claim-rebuttal/claim-rebuttal.model';
import * as layout from '../core/store/layout/layout.actions';

let uuid = require('node-uuid');

@Component({
  selector: 'app-debate',
  template: require('./debate.page.html'),
  styles: [require('./debate.page.css')],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebatePage {
  page$: Observable<DebatePageLayout>;
  claims$: Observable<Claim[]>;
  rebuttals$: Observable<Rebuttal[]>;
  claimRebuttals$: Observable<ClaimRebuttal[]>;
  loading$: Observable<boolean>;

  private subscription: any;
  options: SortablejsOptions = {
    disabled: false
  };

  constructor(private store: Store<fromRoot.RootState>) {
    this.page$ = store.let(fromRoot.getDebatePageState);
    this.claims$ = store.let(fromRoot.getClaims);
    this.rebuttals$ = store.let(fromRoot.getRebuttals);
    this.claimRebuttals$ = store.let(fromRoot.getClaimRebuttals);
    this.loading$ = store.let(fromRoot.getSearchLoading);
  }

  toggleEditable() {
    this.store.dispatch(new layout.ToggleEditableAction());
  }

  toggleExpanded() {
    this.store.dispatch(new layout.ToggleExpandedAction());
  }

  addClaim() {
    this.store.dispatch(new claims.AddClaimAction({
      id: uuid.v1(),
      rebuttalIds: [],
      name: 'New claim',
      expanded: false,
      rebuttalsReordered: false
    }))
  }

  saveAll() {
    alert("Add save here");
  }

  addRebuttal(claim: Claim) {
    this.store.dispatch(new claimActions.AddRebuttalAction(claim))
  }

  toggleRebuttals(claim: Claim) {
    this.store.dispatch(new claimActions.ToggleRebuttalsAction(claim));
  }

  reorderRebuttals(claim: Claim) {
    this.store.dispatch(new claimActions.ReorderRebuttalsAction(claim));
  }

  cancelRebuttal(rebuttal: Rebuttal) {
    this.store.dispatch(new rebuttalActions.CancelRebuttalAction(rebuttal));
  }

  saveRebuttal(rebuttal: Rebuttal) {
    this.store.dispatch(new rebuttalActions.SaveRebuttalAction(rebuttal));
  }

  makeRebuttalEditable(rebuttal: Rebuttal) {
    this.store.dispatch(new rebuttalActions.MakeRebuttalEditableAction(rebuttal));
  }
}
