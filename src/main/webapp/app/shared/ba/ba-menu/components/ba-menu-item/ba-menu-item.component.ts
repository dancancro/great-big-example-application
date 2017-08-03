import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ba-menu-item',
    templateUrl: 'ba-menu-item.component.html',
    styleUrls: ['./ba-menu-item.component.scss']
})
export class BaMenuItem {

    @Input() menuItem: any;
    @Input() child = false;

    @Output() itemHover = new EventEmitter<any>();
    @Output() toggleSubMenu = new EventEmitter<any>();

    public onHoverItem($event): void {
        this.itemHover.emit($event);
    }

    public onToggleSubMenu($event, item): boolean {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    }
}
