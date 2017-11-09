import {
    Component, Input, Output,
    EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';

import { Claim } from '../../../core/store/claim/claim.model';
import { Rebuttal } from '../../../core/store/rebuttal/rebuttal.model';
import { ClaimRebuttal } from '../../../core/store/claim-rebuttal/claim-rebuttal.model';
import { RebuttalComponent } from '../rebuttal/rebuttal.component';
import { getRebuttalEntities } from '../../../core/store';

@Component({
    selector: 'jhi-bernie-claim',
    templateUrl: './claim.component.html',
    styleUrls: ['./claim.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClaimComponent {
    @Input() page: any;  // Observable<BerniePage>
    @Input() claim: Claim;

    @Output() toggleRebuttals = new EventEmitter();
    @Output() reorderRebuttals = new EventEmitter();
    @Output() cancelRebuttal = new EventEmitter();
    @Output() saveRebuttal = new EventEmitter();
    @Output() makeRebuttalEditable = new EventEmitter();
    @Output() addRebuttal = new EventEmitter();
    @Output() navigate = new EventEmitter();

    options: SortablejsOptions = {
        handle: '.drag-handle',
        disabled: false,
        group: {
            name: 'a',
            pull: 'clone'
        },
        animation: 0
    };

    // getRebuttals(claim) {
    //   // return Observable.zip(this.rebuttals,
    //   //   this.claimRebuttals,
    //   //     (rebuts: Rebuttal[], claimRebuts: ClaimRebuttal[]) => {
    //   //       return rebuts.filter(rebut => claimRebuts.some(cr => cr.claimId===claim.id && cr.rebuttalId===rebut.id))
    //   //     }
    //   // );

    //   return this.rebuttals.filter(rebut => this.claimRebuttals.some(cr => cr.claimId === claim.id && cr.rebuttalId === rebut.id))

    // }
}
