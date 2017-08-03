import { Directive, Input, Output, ElementRef, EventEmitter, OnChanges } from '@angular/core';

// import 'jquery-slimscroll';

@Directive({
    selector: '[baSlimScroll]'
})
export class BaSlimScrollDirective implements OnChanges {

    @Input() public baSlimScrollOptions: Object;

    constructor(private _elementRef: ElementRef) {
    }

    ngOnChanges(changes) {
        this.scroll();
    }

    private scroll() {
        this.destroy();
        this.init();
    }

    private init() {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    }

    private destroy() {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    }
}
