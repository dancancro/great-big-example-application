/**
 * @module UiModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Timer icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/ios-stopwatch-outline.svg)
 */
@Component({
  selector: 'c2c-icon-time',
  templateUrl: './icon-time.component.html',
  styleUrls: ['./icon-time.component.scss']
})
export class IconTimeComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
