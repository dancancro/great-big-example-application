import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import * as counter from '../core/store/counter/counter.actions';
import { Counter } from '../core/store/counter/counter.model';


@Component({
  selector: 'counter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <rio-container testid="counter" [size]=2 [center]=true>
      <h2 data-testid="counter-heading" id="qa-counter-heading"
        class="center caps">
        Counter
      </h2>

      <rio-counter
        [value]="value$ | async"
        (increment)="increment()"
        (decrement)="decrement()">
      </rio-counter>
    </rio-container>
  `,
  styleUrls: ['counter.component.css']
})
export class RioCounterPage {
  value$: Observable<number>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.value$ = store.let(fromRoot.getCounterValue);
  }

  increment() {
    this.store.dispatch(new counter.IncrementCounterAction());
  }

  decrement() {
    this.store.dispatch(new counter.DecrementCounterAction());
  }
}
