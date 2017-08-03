import { Directive, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[baScrollPosition]'
})
export class BaScrollPositionDirective implements OnInit {

    @Input() public maxHeight: number;
    @Output() public scrollChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _isScrolled: boolean;

    public ngOnInit(): void {
        this.onWindowScroll();
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
        const isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    }
}
