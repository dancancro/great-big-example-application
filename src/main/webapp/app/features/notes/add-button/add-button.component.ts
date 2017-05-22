import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'jhi-add-button',
    templateUrl: './add-button.component.html',
    styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
    @Input() colour: string;
    @Output() add: EventEmitter<string> = new EventEmitter<string>();

    onClick($event) {
        $event.preventDefault();
        this.add.emit(this.colour);
    }
}
