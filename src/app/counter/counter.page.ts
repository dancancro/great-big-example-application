import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import { Counter } from '../core/store/counter/counter.model';
import { slices } from '../core/store/util';
import * as SliceActions from '../core/store/slice/slice.actions';


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
  styleUrls: ['./counter.component.css']
})
export class RioCounterPage {
  value$: Observable<number>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.value$ = store.select(fromRoot.getCounterValue);
  }

  increment() {
    this.store.dispatch(new SliceActions.Update(slices.COUNTER, ['value'], (state) => state.value + 1));
  }

  decrement() {
    this.store.dispatch(new SliceActions.Update(slices.COUNTER, ['value'], (state) => state.value - 1));
  }
}
