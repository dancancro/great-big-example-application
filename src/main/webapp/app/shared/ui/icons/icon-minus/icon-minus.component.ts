/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Minus icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-minus-empty.svg)
 */
@Component({
  selector: 'c2c-icon-minus',
  templateUrl: './icon-minus.component.html',
  styleUrls: ['./icon-minus.component.scss']
})
export class IconMinusComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
