import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';

@Component({
    selector: 'ba-page-top',
    templateUrl: 'ba-page-top.component.html',
    styleUrls: ['./ba-page-top.component.scss']
})
export class BaPageTop {

    public isScrolled = false;
    public isMenuCollapsed = false;

    constructor(private _state: GlobalState) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }
}
