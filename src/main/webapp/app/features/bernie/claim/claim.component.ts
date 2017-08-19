import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { Claim } from '../../../core/store/claim/claim.model';

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
