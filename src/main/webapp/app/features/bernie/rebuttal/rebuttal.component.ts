import {
    Component, Input, Output, EventEmitter, OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Claim } from '../../../core/store/claim/claim.model';
import { Rebuttal } from '../../../core/store/rebuttal/rebuttal.model';

@Component({
    selector: 'jhi-bernie-rebuttal',
    templateUrl: './rebuttal.component.html',
    styleUrls: ['./rebuttal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RebuttalComponent implements OnInit {
    @Input() page: any;
    @Input() claim: Claim;
    @Input() rebuttal: Rebuttal;

    @Output() cancel = new EventEmitter();
    @Output() makeEditable = new EventEmitter();
    @Output() save = new EventEmitter();

    editForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            shortName: [this.rebuttal.shortName, Validators.required],
            longName: [this.rebuttal.longName, Validators.required],
            link: this.rebuttal.link,
            comments: this.rebuttal.comments
        });
    }

}
