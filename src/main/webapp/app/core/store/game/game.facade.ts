import { Inject, Injectable, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { fromJS, Map } from 'immutable';

import { BaseAsyncService } from '../../services/base.async-service';
import { BaseFacade } from '../base/base.facade';
import { GameActions } from './game.action-creator';

/**
 * From the author of this example:
 * http://disq.us/p/1e7590n
 * "Models and Effects seems interchangeable. I like the models approach
 * because it doesn't introduce extra syntax and concept, and seems more explicit."
 *
 * I renamed this from Model to Facade to avoid confusion with "Model" currently
 * used for schema definitions
 */

@Injectable()
export class GameFacade extends BaseFacade {
    games$: Observable<any>;
    game$: Observable<any>;

    constructor(protected store: Store<any>,
        @Optional() @Inject(BaseAsyncService) services: BaseAsyncService[]) {
        super(services || []);
        this.games$ = this.store.select('games');
        this.game$ = this.store.select('game');
    }

    startGame() {
        this.store.dispatch(GameActions.startGame());
    }

    onProgress(text: string, time: number) {
        this.performAsyncAction(GameActions.gameProgress(text, time))
            .subscribe(() => {
                // Do nothing, we're all good
            }, () => {
                this.store.dispatch(GameActions.invalidateGame());
            });
    }

    completeGame(text: string, time: number) {
        const action = GameActions.completeGame(text, time);
        this.store.dispatch(action);
        this.performAsyncAction(action)
            .subscribe(
            () => console.log('Done!'),
            () => console.log('Done cheating!')
            );
    }
}
