/**
 * @module SharedModule
 */ /** */
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
/**
 * @whatItDoes Creates up to 6 labels with a circular design.
 * @consumers {@link HomeModule}
 */
@Component({
    selector: 'c2c-labels',
    templateUrl: './labels.component.html',
    styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnChanges {
    /**
     * Passed to the `aria-label` attribute of the `ul`
     */
    @Input() label: string;
    /**
     * An input array of with the color and name for each label element.
     */
    @Input() labels: Array<Label>;
    /**
     * EventEmitter for any changes that occure.
     *
     * This can notify other components to check for
     * updates that this component might effect (e.g. if this componenet's height change is needed
     * in a parent or sibling component).
     */
    @Output() change = new EventEmitter();
    /**
     * Triggered on all changes to this component.
     * - Emits a change notificatino via the {@link change} EventEmitter.
     */
    ngOnChanges() {
        setTimeout(() => {
            this.change.emit();
        }, 0);
    }
}
/**
 * `Label`s require both a name and background-color
 */
export interface Label {
    name: String;
    color: String;
}
