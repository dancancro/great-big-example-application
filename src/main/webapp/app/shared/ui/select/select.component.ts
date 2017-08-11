/**
 * @module UiModule
 */ /** */
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild } from '@angular/core';
/**
 * @whatItDoes Returns a simple ui component as defined in the {@link UiModule}.
 */
@Component({
  selector: 'c2c-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  /**
   * attr.aria-hidden (optional)
   */
  @Input() ariaHidden: boolean;
  /**
   * Category (pural) for the type of options (e.g. Restaurants, animals, cities, etc.)
   * @default all is used as a default like this: `All ${category}`
   */
  @Input() category: string;
  /**
   * Options given in select box
   */
  @Input() options: Array<string>;
  /**
   * attr.aria-label (optional)
   */
  @Input() label: string;
  /**
   * attr.title (optional)
   */
  @Input() title: string;
  /**
   * `background-color` from the `select` element when not focused.
   */
  @Input() color: string;
  /**
   * attr.tabindex (optional)
   */
  @Input() tabindex: number;
  /**
   * Emits all changes via `update`.
   */
  @Output() update = new EventEmitter();
  /**
   * A reference to the `select` element.
   */
  @ViewChild('select') private select: ElementRef;
  /**
   * Gets the select value.
   * @returns returns the current value of the `select`.
   */
  get(): string {
    const selectNative = this.select.nativeElement;
    return selectNative.options[selectNative.selectedIndex].value;
  }
  /**
   * Sets the `select` value.
   */
  set(newValue: string) {
    this.select.nativeElement.value = newValue;
  }
}
