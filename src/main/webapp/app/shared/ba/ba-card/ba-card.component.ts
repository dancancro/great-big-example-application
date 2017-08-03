import { Component, Input } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'ba-card',
    templateUrl: 'ba-card.component.html',
})
export class BaCard {
    @Input() title: String;
    @Input() baCardClass: String;
    @Input() cardType: String;
}
