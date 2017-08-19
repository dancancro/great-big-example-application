import { Component, EventEmitter, Output, Inject, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Filters } from '../talks.layout';

@Component({
    selector: 'filters-cmp',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
    @Output() filtersChange = new EventEmitter();

    @Input() set filters(v) {
        this.filtersForm.setValue({
            title: v.title,
            speaker: v.speaker,
            highRating: v.minRating >= 9
        }, { emitEvent: false });
    }

    filtersForm = new FormGroup({
        speaker: new FormControl(),
        title: new FormControl(),
        highRating: new FormControl(false),
    });

    constructor() {
        this.filtersForm.valueChanges.debounceTime(200).subscribe((value) => {
            this.filtersChange.next(this.createFiltersObject(value));
        });
    }

    private createFiltersObject({ title, speaker, highRating }: { title: string, speaker: string, highRating: false }): Filters {
        const minRating = highRating ? 9 : 0;
        return { speaker: speaker || null, title: title || null, minRating };
    }
}
