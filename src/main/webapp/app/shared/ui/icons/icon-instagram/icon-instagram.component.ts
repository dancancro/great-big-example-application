/**
 * @module SharedModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/social-instagram-outline.svg)
 */
@Component({
  selector: 'c2c-icon-instagram',
  templateUrl: './icon-instagram.component.html',
  styleUrls: ['./icon-instagram.component.scss']
})
export class IconInstagramComponent {
  /**
   * Sets the icon's `aria-hidden` attribute to true
   */
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
