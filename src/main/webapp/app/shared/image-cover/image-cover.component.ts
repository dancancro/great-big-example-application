/**
 * @module SharedModule
 */ /** */
import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    Renderer
} from '@angular/core';
/**
 * @whatItDoes Creates an image that covers the element.
 * @consumers {@link HomeModule}
 *
 * Features:
 * - Covers the entire element using `background-size: cover`
 * - Creates an `img` that can be right clicked and saved
 * - `img` can have `alt` text
 *
 * The `img` element is not visible to the user. Instead the user sees the `background-image`
 * optimized with the `cover` style.
 */
@Component({
    selector: 'c2c-image-cover',
    templateUrl: './image-cover.component.html',
    styleUrls: ['./image-cover.component.scss']
})
export class ImageCoverComponent implements AfterViewInit, OnChanges, OnInit {
    /**
     * Optional string to use for the `alt` attribute of the `img` element.
     */
    @Input() alt: string;
    /**
     * Image will fade into view when true.
     */
    fadeIn = false;
    /**
     * True after there is an error loading the `img` element.
     */
    imgError = false;
    /**
     * True after `img` element has loaded.
     */
    imgLoad = false;
    /**
     * Image url to use for the `img` element and host element's `background-image` style.
     */
    @Input() src: string;
    /**
     * Creates the {@link ImageCoverComponent}
     * @param renderer used to update the DOM
     * [Angular 2 - Renderer](https://angular.io/docs/ts/latest/api/core/index/Renderer-class.html)
     * @param element a reference to the host element
     */
    constructor(
        private renderer: Renderer,
        private element: ElementRef) { }
    /**
     * Let image fade in if it takes more than 300 milliseconds o load.
     */
    ngOnInit() {
        setTimeout(() => this.fadeIn = true, 300);
    }
    /**
     * First call to {@link updateImage}.
     */
    ngAfterViewInit() {
        this.updateImage();
    }
    /**
     * Updates the image (via {@link updateImage}) if the {@link src} Input changes.
     */
    ngOnChanges() {
        this.updateImage();
    }
    /**
     * Sets the host element's `background-image` style to the {@link src} Input
     *
     * this helped!: http://stackoverflow.com/a/22374423/5357459
     */
    private updateImage() {
        if (this.src !== undefined && this.src !== null) {
            this.renderer.setElementStyle(
                this.element.nativeElement, 'backgroundImage', `url(${this.src})`);
        }
    }
}
