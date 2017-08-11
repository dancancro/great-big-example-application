/**
 * @module SharedModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/social-facebook.svg)
 */
@Component({
  selector: 'c2c-icon-facebook',
  templateUrl: './icon-facebook.component.html',
  styleUrls: ['./icon-facebook.component.scss']
})
export class IconFacebookComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
