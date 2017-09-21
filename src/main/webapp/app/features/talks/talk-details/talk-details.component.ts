import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../services/watch.service';
import { Talk } from '../../../core/store/talk/talk.model';
import { RootState } from '../../../core/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import * as EntityActions from '../../../core/store/entity/entity.actions';
import { slices } from '../../../core/store/util';
import * as fromRoot from '../../../core/store';

@Component({
    selector: 'talk-details-cmp',
    templateUrl: './talk-details.component.html',
    styleUrls: ['./talk-details.component.css']
})
export class TalkDetailsComponent implements OnDestroy {
    talk: Talk;
    isWatched: boolean;
    layoutSub: Subscription;
    talksSub: Subscription;

    constructor(private route: ActivatedRoute, private store: Store<RootState>) {

        this.layoutSub = store.select(fromRoot.getLayoutState).subscribe((layout) => {
            const id = (+route.snapshot.paramMap.get('id'));
            this.isWatched = layout.talksPage.watched[id];
        });

        this.talksSub = this.store.select(fromRoot.getSelectedTalk).subscribe((talk) => {
            this.talk = talk;
        });
    }

    handleRate(newRating: number): void {
        this.store.dispatch(new EntityActions.Patch(slices.TALK, {
            id: this.talk.id,
            rating: newRating
        }));
    }

    handleWatch(): void {
        this.store.dispatch({
            type: 'WATCH',
            payload: {
                id: this.talk.id,
            }
        });
    }

    ngOnDestroy() {
        this.layoutSub && this.layoutSub.unsubscribe();
        this.talksSub && this.talksSub.unsubscribe();
    }
}
