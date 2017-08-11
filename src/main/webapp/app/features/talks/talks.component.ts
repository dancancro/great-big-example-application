import { Component, Input } from '@angular/core';
import { Talk } from '../../core/store/talk/talk.model';

@Component({
    selector: 'jhi-talks',
    templateUrl: './talks.component.html',
    styleUrls: ['./talks.component.css']
})
export class TalksComponent {
    @Input() talks: Talk[];
}
