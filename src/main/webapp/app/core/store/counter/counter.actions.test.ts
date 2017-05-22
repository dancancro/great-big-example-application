/*
import { CounterActions } from './counter.actions';
import { NgRedux } from 'ng2-redux';

class MockRedux extends NgRedux<any> {
  constructor() {
    super(null);
  }
  dispatch: () => {};
}

describe('counter action creators', () => {
  let actions: CounterActions;
  let mockRedux: NgRedux<any>;

  beforeEach(() => {
    mockRedux = new MockRedux();
    actions = new CounterActions(mockRedux);
  });

  it('increment should dispatch INCREMENT_COUNTER action', () => {
    const expectedAction = {
      type: CounterActions.INCREMENT_COUNTER
    };

    spyOn(mockRedux, 'dispatch');
    actions.increment();

    expect(mockRedux.dispatch).toHaveBeenCalled();
    expect(mockRedux.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('decrement should dispatch DECREMENT_COUNTER action', () => {
    const expectedAction = {
      type: CounterActions.DECREMENT_COUNTER
    };

    spyOn(mockRedux, 'dispatch');
    actions.decrement();

    expect(mockRedux.dispatch).toHaveBeenCalled();
    expect(mockRedux.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
*/
