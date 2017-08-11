/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-arrow-down.svg)
 */
@Component({
  selector: 'c2c-icon-arrow-down',
  templateUrl: './icon-arrow-down.component.html',
  styleUrls: ['./icon-arrow-down.component.scss']
})
export class IconArrowDownComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
