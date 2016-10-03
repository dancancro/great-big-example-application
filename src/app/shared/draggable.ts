import {Directive, Output, EventEmitter, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[draggable]",
  host: {
    "(mousedown)": "onMouseDown($event)",
    "(mousemove)": "onMouseMove($event)",
    "(mouseup)": "onMouseUp($event)"
  }
})
export class Draggable {
    _isDragging: boolean = false;
    _originalClientX: number;
    _originalClientY: number;
    _originalTop: number;
    _originalLeft: number;
    _hasDragged: boolean = false;

    @Output('draggable') endDragEvent = new EventEmitter(false);

    constructor(public element: ElementRef){
      this.element.nativeElement.style.position = 'absolute';
    }
    onMouseDown($event) {
      if ($event.target.style.position === "absolute" && $event.target.style.left && $event.target.style.top) {
        this._hasDragged = false;
        this._isDragging = true;
        this._originalLeft = parseInt($event.target.style.left, 10);
        this._originalTop = parseInt($event.target.style.top, 10);
        this._originalClientX = $event.clientX;
        this._originalClientY = $event.clientY;
      }else {
        console.log("draggable: Error! the annotated " + $event.target.nodeName + " element needs to be inline styled with position, top and left");
      }
    }

    onMouseMove($event) {
      if (this._isDragging) {
        this._hasDragged = true;
        this.element.nativeElement.style.top  = (this._originalTop + ($event.clientY - this._originalClientY))  + 'px';
        this.element.nativeElement.style.left = (this._originalLeft + ($event.clientX - this._originalClientX)) + 'px';
      }
    }

    onMouseUp($event) {
      if (this._isDragging) {
        this._isDragging = false;
        if(this._hasDragged){
          this.endDragEvent.emit({left: this._originalLeft + ($event.clientX - this._originalClientX), top: this._originalTop + ($event.clientY - this._originalClientY)});
        }
      }
    }
}
