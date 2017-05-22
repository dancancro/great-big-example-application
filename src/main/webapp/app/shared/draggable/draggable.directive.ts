import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[jhiDraggable]'
})
export class DraggableDirective {
    isDragging = false;
    originalClientX: number;
    originalClientY: number;
    originalTop: number;
    originalLeft: number;
    hasDragged = false;

    @Output('jhiDraggable') endDragEvent = new EventEmitter();

    constructor(public element: ElementRef) {
        this.element.nativeElement.style.position = 'absolute';
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown($event) {
        if ($event.target.style.position === 'absolute'
            && $event.target.style.left && $event.target.style.top) {
            this.hasDragged = false;
            this.isDragging = true;
            this.originalLeft = parseInt($event.target.style.left, 10);
            this.originalTop = parseInt($event.target.style.top, 10);
            this.originalClientX = $event.clientX;
            this.originalClientY = $event.clientY;
        } else {
            console.log('draggable: Error! the annotated ' + $event.target.nodeName
                + ' element needs to be inline styled with position, top and left');
        }
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove($event) {
        if (this.isDragging) {
            this.hasDragged = true;
            this.element.nativeElement.style.top =
                (this.originalTop + ($event.clientY - this.originalClientY)) + 'px';
            this.element.nativeElement.style.left =
                (this.originalLeft + ($event.clientX - this.originalClientX)) + 'px';
        }
    }

    @HostListener('mouseup', ['$event'])
    onMouseUp($event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.hasDragged) {
                this.endDragEvent.emit({
                    left: this.originalLeft + ($event.clientX - this.originalClientX),
                    top: this.originalTop + ($event.clientY - this.originalClientY)
                });
            }
        }
    }
}
