/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Plus icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-plus-empty.svg)
 */
@Component({
  selector: 'c2c-icon-plus',
  templateUrl: './icon-plus.component.html',
  styleUrls: ['./icon-plus.component.scss']
})
export class IconPlusComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
