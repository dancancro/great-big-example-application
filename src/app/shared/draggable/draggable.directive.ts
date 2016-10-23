import {Directive, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[draggable]',
  host: {
    '(mousedown)': 'onMouseDown($event)',
    '(mousemove)': 'onMouseMove($event)',
    '(mouseup)': 'onMouseUp($event)'
  }
})
export class Draggable {
    isDragging: boolean = false;
    originalClientX: number;
    originalClientY: number;
    originalTop: number;
    originalLeft: number;
    hasDragged: boolean = false;

    @Output('draggable') endDragEvent = new EventEmitter(false);

    constructor(public element: ElementRef) {
      this.element.nativeElement.style.position = 'absolute';
    }
    onMouseDown($event) {
      if ($event.target.style.position === 'absolute'
        && $event.target.style.left && $event.target.style.top) {
        this.hasDragged = false;
        this.isDragging = true;
        this.originalLeft = parseInt($event.target.style.left, 10);
        this.originalTop = parseInt($event.target.style.top, 10);
        this.originalClientX = $event.clientX;
        this.originalClientY = $event.clientY;
      }else {
        console.log('draggable: Error! the annotated ' + $event.target.nodeName
          + ' element needs to be inline styled with position, top and left');
      }
    }

    onMouseMove($event) {
      if (this.isDragging) {
        this.hasDragged = true;
        this.element.nativeElement.style.top  =
          (this.originalTop + ($event.clientY - this.originalClientY))  + 'px';
        this.element.nativeElement.style.left =
          (this.originalLeft + ($event.clientX - this.originalClientX)) + 'px';
      }
    }

    onMouseUp($event) {
      if (this.isDragging) {
        this.isDragging = false;
        if (this.hasDragged) {
          this.endDragEvent.emit({
            left: this.originalLeft + ($event.clientX - this.originalClientX),
            top: this.originalTop + ($event.clientY - this.originalClientY)});
        }
      }
    }
}
