import { Component, ViewChild, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'ba-back-top',
    styleUrls: ['./ba-back-top.component.scss'],
    template: `
    <i #baBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
})
export class BaBackTop implements AfterViewInit {

    @Input() position = 400;
    @Input() showSpeed = 500;
    @Input() moveSpeed = 1000;

    @ViewChild('baBackTop') _selector: ElementRef;

    ngAfterViewInit() {
        this._onWindowScroll();
    }

    @HostListener('click')
    _onClick(): boolean {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    }

    @HostListener('window:scroll')
    _onWindowScroll(): void {
        const el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    }
}
